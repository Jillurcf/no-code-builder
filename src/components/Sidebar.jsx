import React from 'react';
import { useDrag } from 'react-dnd';

const Sidebar = () => {
  const [{ isDragging: isTextDragging }, dragText] = useDrag({
    type: 'element',
    item: { type: 'text', content: 'Sample Text' },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [{ isDragging: isImageDragging }, dragImage] = useDrag({
    type: 'element',
    item: { type: 'image', content: 'https://via.placeholder.com/150' },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div style={{ width: '200px', padding: '10px', background: '#f0f0f0' }}>
      <div
        ref={dragText}
        style={{
          opacity: isTextDragging ? 0.5 : 1,
          padding: '10px',
          backgroundColor: '#ddd',
          marginBottom: '10px',
          cursor: 'pointer',
        }}
      >
        Drag Text
      </div>
      <div
        ref={dragImage}
        style={{
          opacity: isImageDragging ? 0.5 : 1,
          padding: '10px',
          backgroundColor: '#ddd',
          marginBottom: '10px',
          cursor: 'pointer',
        }}
      >
        Drag Image
      </div>
    </div>
  );
};

export default Sidebar;
