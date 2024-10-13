import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import TopBar from './components/TopBar';
import styled from 'styled-components';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MainWrapper = styled.div`
  display: flex;
  height: calc(100vh - 50px); /* Adjust to account for TopBar */
`;

const SourceCodeWrapper = styled.pre`
  background-color: #f8f9fa;
  padding: 20px;
  overflow: auto;
  height: 100%;
  width: 100%;
`;

const App = () => {
  const [elements, setElements] = useState([]);
  const [viewSourceCode, setViewSourceCode] = useState(false); // Add state to toggle between preview and source code

  const addElement = (item) => {
    setElements((prevElements) => [...prevElements, { ...item, content: item.type === 'image' ? '' : item.content }]);
  };

  const updateElement = (index, content) => {
    const updatedElements = elements.map((el, i) =>
      i === index ? { ...el, content } : el
    );
    setElements(updatedElements);
  };

  const removeElement = (index) => {
    setElements(elements.filter((_, i) => i !== index));
  };

  const handlePreviewClick = () => setViewSourceCode(false);
  const handleSourceCodeClick = () => setViewSourceCode(true);

  // Function to generate HTML code from the canvas elements
  const generateSourceCode = () => {
    return elements
      .map((el) => {
        if (el.type === 'text') {
          return `<p>${el.content}</p>`;
        } else if (el.type === 'image') {
          return `<img src="${el.content}" alt="Uploaded Image" />`;
        }
        return '';
      })
      .join('\n');
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <AppWrapper>
        <TopBar 
          onPreviewClick={handlePreviewClick} 
          onSourceCodeClick={handleSourceCodeClick} 
        />
        <MainWrapper>
          {viewSourceCode ? (
            <SourceCodeWrapper>
              {generateSourceCode()}
            </SourceCodeWrapper>
          ) : (
            <>
              <Sidebar />
              <Canvas 
                elements={elements}
                onAddElement={addElement}
                onUpdateElement={updateElement}
                onRemoveElement={removeElement}
              />
            </>
          )}
        </MainWrapper>
      </AppWrapper>
    </DndProvider>
  );
};

export default App;
