import React from 'react';
import { useDrop } from 'react-dnd';

const Canvas = ({ elements, onElementDrop, onSelectElement }) => {
  const [, drop] = useDrop({
    accept: 'element',
    drop: (item) => onElementDrop(item),
  });

  return (
    <div
      ref={drop}
      style={{
        flex: 1,
        border: '2px dashed #ccc',
        padding: '20px',
        minHeight: '100vh',
        background: '#fff',
      }}
    >
      {elements.map((element) => (
        <div
          key={element.id}
          onClick={() => onSelectElement(element.id)}
          style={{
            marginBottom: '10px',
            cursor: 'pointer',
            fontSize: `${element.fontSize}px`, // Use px for font size
            color: element.color,
            fontWeight: element.bold ? 'bold' : 'normal',
            fontStyle: element.italic ? 'italic' : 'normal',
          }}
          contentEditable={element.type === 'text'} // Allows text editing
          suppressContentEditableWarning={true} // To avoid warnings
        >
          {element.type === 'text' && element.content}
          {element.type === 'image' && (
            <img src={element.content} alt="Element" width="150" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Canvas;
