import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import TopBar from './components/TopBar';
import styled from 'styled-components';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Builder from './components/Builder';

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
  const [activeElement, setActiveElement] = useState(null);
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
  const handleElementSelect = (index) => {
        setActiveElement(index); // Update the active element
      };
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
              <Sidebar 
                activeElement={activeElement} 
                elements={elements}
                onUpdateElement={updateElement}
              />
              <Canvas 
                elements={elements}
                onAddElement={addElement}
                onUpdateElement={updateElement}
                onRemoveElement={removeElement}
                onElementSelect={handleElementSelect}
              />
              
            </>
          )}
        </MainWrapper>
      </AppWrapper>
    </DndProvider>
  );
};
// const App = () => {
//   const [elements, setElements] = useState([]);
//   const [activeElement, setActiveElement] = useState(null); // Track selected element
//   const [viewSourceCode, setViewSourceCode] = useState(false);

//   const addElement = (item) => {
//     setElements((prevElements) => [...prevElements, { ...item, content: item.type === 'image' ? '' : item.content }]);
//   };

//   const updateElement = (index, content) => {
//     const updatedElements = elements.map((el, i) =>
//       i === index ? { ...el, content } : el
//     );
//     setElements(updatedElements);
//   };

//   const removeElement = (index) => {
//     setElements(elements.filter((_, i) => i !== index));
//   };

//   const handleElementSelect = (index) => {
//     setActiveElement(index); // Update the active element
//   };
//   const generateSourceCode = () => {
//     return elements
//       .map((el) => {
//         if (el.type === 'text') {
//           return `<p>${el.content}</p>`;
//         } else if (el.type === 'image') {
//           return `<img src="${el.content}" alt="Uploaded Image" width="${el.width || 300}" height="${el.height || 300}" />`;
//         }
//         return '';
//       })
//       .join('\n');
//   };
//   return (
//     <DndProvider backend={HTML5Backend}>
//       <AppWrapper>
//         <TopBar 
//           onPreviewClick={() => setViewSourceCode(false)} 
//           onSourceCodeClick={() => setViewSourceCode(true)} 
//         />
//         <MainWrapper>
//           {viewSourceCode ? (
//             <SourceCodeWrapper>
//               {generateSourceCode()}
//             </SourceCodeWrapper>
//           ) : (
//             <>
//               <Sidebar 
//                 activeElement={activeElement} 
//                 elements={elements}
//                 onUpdateElement={updateElement}
//               />
//               <Canvas 
//                 elements={elements}
//                 onAddElement={addElement}
//                 onUpdateElement={updateElement}
//                 onRemoveElement={removeElement}
//                 onElementSelect={handleElementSelect} // Pass the handler
//               />
//             </>
//           )}
//         </MainWrapper>
//       </AppWrapper>
//     </DndProvider>
//   );
// };

export default App;
