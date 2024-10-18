import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import MenuColumnParent from './components/MenuColumnParent';

const App = () => {
  const [elements, setElements] = useState([]);
  const [selectedElementIndex, setSelectedElementIndex] = useState(null);

  const handleElementDrop = (item) => {
    const newElement = {
      ...item,
      id: Date.now(),
      left: 100,
      top: 100,
      fontSize: 16,
      color: '#000000',
      content: item.type === 'text' ? 'Editable Text' : 'https://via.placeholder.com/150',
      width: 200,
      height: 'auto',
    };
    setElements((prev) => [...prev, newElement]);
    setSelectedElementIndex(elements.length);
  };

  const handleSelectElement = (index) => {
    setSelectedElementIndex(index);
  };

  const handleUpdateElement = (index, updatedElement) => {
    const updatedElements = [...elements];
    updatedElements[index] = updatedElement;
    setElements(updatedElements);
  };

  const handleRemoveElement = (index) => {
    const updatedElements = elements.filter((_, i) => i !== index);
    setElements(updatedElements);
    if (selectedElementIndex === index) {
      setSelectedElementIndex(null);
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar onElementDrop={handleElementDrop} />
        <div style={{ flex: 1, position: 'relative', display: 'flex' }}>
          <Canvas
            elements={elements}
            onSelectElement={handleSelectElement}
            onUpdateElement={handleUpdateElement}
            onRemoveElement={handleRemoveElement}
            selectedElementIndex={selectedElementIndex}
          />
          <div style={{ width: '300px', padding: '10px', borderLeft: '1px solid #ccc' }}>
            <MenuColumnParent
              selectedElement={
                selectedElementIndex !== null ? { ...elements[selectedElementIndex], index: selectedElementIndex } : null
              }
              onUpdateElement={handleUpdateElement}
              onRemoveElement={handleRemoveElement}
            />
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default App;
