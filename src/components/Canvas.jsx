import React from 'react';
import { useDrop } from 'react-dnd';
import { Rnd } from 'react-rnd';

const Canvas = ({ elements, onSelectElement, onUpdateElement }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'element',
    drop: (item) => {
      const newElement = {
        ...item,
        left: 100,
        top: 100,
      };
      onUpdateElement(elements.length, newElement);
    },
  });

  return (
    <div
      ref={drop}
      style={{
        flex: 1,
        border: '2px dashed #ccc',
        padding: '20px',
        background: '#fff',
        position: 'relative',
      }}
    >
      {elements.map((element, index) => (
        <Rnd
          key={element.id}
          style={{ border: '1px solid #ccc', padding: '5px', cursor: 'move' }}
          position={{ x: element.left, y: element.top }}
          size={{ width: element.width, height: element.height }}
          onDragStop={(e, d) => {
            const updatedElement = { ...element, left: d.x, top: d.y };
            onUpdateElement(index, updatedElement);
          }}
          onResizeStop={(e, direction, ref, delta, position) => {
            const updatedElement = {
              ...element,
              width: ref.offsetWidth,
              height: ref.offsetHeight,
              left: position.x,
              top: position.y,
            };
            onUpdateElement(index, updatedElement);
          }}
        >
          {element.type === 'text' ? (
            <div
              contentEditable
              suppressContentEditableWarning
              style={{
                fontSize: `${element.fontSize}px`,
                color: element.color,
                minHeight: '20px',
                padding: '5px',
                border: 'none',
                outline: 'none',
                width: '100%',
                height: '100%',
                fontWeight: element.isBold ? 'bold' : 'normal',
                fontStyle: element.isItalic ? 'italic' : 'normal',
                textAlign: element.textAlign || 'left',
              }}
              onBlur={(e) => {
                const updatedElement = { ...element, content: e.target.innerText };
                onUpdateElement(index, updatedElement);
              }}
              onClick={() => onSelectElement(index)}
            >
              {element.content}
            </div>
          ) : (
            <img src={element.content} alt="img" style={{ maxWidth: '100%', maxHeight: '100%' }} />
          )}
        </Rnd>
      ))}
    </div>
  );
};

export default Canvas;
