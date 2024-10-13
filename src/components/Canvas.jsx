import React from 'react';
import { useDrop } from 'react-dnd';
import styled from 'styled-components';
import TextEditor from './TextEditor';
import ImageUploader from './ImageUploader';

const CanvasWrapper = styled.div`
  width: 100%;
  // height: 500px;
  border: 2px dashed #ccc;
  padding: 20px;
  background-color: #f0f0f0;
  overflow-y: auto; /* Enable scroll for large content */
`;

const CanvasItem = styled.div`
  margin-bottom: 20px;
`;

const Canvas = ({ elements, onAddElement, onUpdateElement, onRemoveElement }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'element',
    drop: (item) => onAddElement(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <CanvasWrapper ref={drop} style={{ backgroundColor: isOver ? '#e0e0e0' : '#f0f0f0' }}>
      {elements.map((element, index) => (
        <CanvasItem key={index}>
          {element.type === 'text' && (
            <TextEditor
              content={element.content}
              onChange={(newContent) => onUpdateElement(index, newContent)}
            />
          )}
          {element.type === 'image' && (
            <ImageUploader
              imageUrl={element.content}
              onUpload={(url) => onUpdateElement(index, url)}
            />
          )}
          <button onClick={() => onRemoveElement(index)}>Remove</button>
        </CanvasItem>
      ))}
    </CanvasWrapper>
  );
};

export default Canvas;
