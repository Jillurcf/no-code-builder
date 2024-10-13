import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Canvas from './Canvas';
import MenuColumnComponent from './MenuColumn';

const Builder = () => {
  const [elements, setElements] = useState([]);  // Holds the elements on the canvas
  const [selectedElementIndex, setSelectedElementIndex] = useState(null);  // Holds index of the selected element

  const addElement = (item) => {
    setElements((prevElements) => [...prevElements, { ...item, left: 100, top: 100 }]);
  };

  const updateElement = (index, updatedProperties) => {
    setElements((prevElements) =>
      prevElements.map((el, i) => (i === index ? { ...el, ...updatedProperties } : el))
    );
  };

  const handleSelectElement = (index) => {
    setSelectedElementIndex(index); // Set the selected element index
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Sidebar
        selectedElement={elements[selectedElementIndex]} // Pass the selected element to the sidebar
        onAddElement={addElement} // Pass addElement function to add elements like image or text
        onUpdateElement={(updatedProperties) => updateElement(selectedElementIndex, updatedProperties)} // Update element when modified via the sidebar
      />
      <Canvas
        elements={elements}
        onAddElement={addElement}
        onUpdateElement={updateElement}
        onSelectElement={handleSelectElement} // Pass selection handler to Canvas
      />
      {selectedElementIndex !== null && (
        <MenuColumnComponent
          selectedElement={elements[selectedElementIndex]} // Pass the selected element to MenuColumn
          onUpdateElement={(updatedProperties) => updateElement(selectedElementIndex, updatedProperties)} // Update text properties via MenuColumn
        />
      )}
    </div>
  );
};

export default Builder;
