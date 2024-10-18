import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import Editor from './components/Editor';

const App = () => {
  const [elements, setElements] = useState([]); // Track elements on the canvas
  const [selectedElement, setSelectedElement] = useState(null); // Track the currently selected element

  const handleElementDrop = (item) => {
    // Add dropped item to elements
    setElements((prev) => [
      ...prev,
      {
        ...item,
        id: prev.length, // Unique identifier
        fontSize: 16,
        color: '#000000',
      },
    ]);
  };

  const handleSelectElement = (id) => {
    // Set selected element based on its ID
    setSelectedElement(id);
  };

  const handleUpdateElement = (updatedElement) => {
    // Update the element's properties
    const updatedElements = elements.map((el) =>
      el.id === updatedElement.id ? updatedElement : el
    );
    setElements(updatedElements);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar />
        <Canvas
          elements={elements}
          onElementDrop={handleElementDrop}
          onSelectElement={handleSelectElement}
        />
        {selectedElement !== null && (
          <Editor
            selectedElement={elements.find((el) => el.id === selectedElement)}
            onUpdateElement={handleUpdateElement}
          />
        )}
      </div>
    </DndProvider>
  );
};

export default App;
