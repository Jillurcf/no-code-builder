import React from 'react';
import { useDrag } from 'react-dnd';

const Sidebar = ({ onElementDrop }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'element',
    item: { type: 'text' },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [{ isDraggingImage }, dragImage] = useDrag({
    type: 'element',
    item: { type: 'image' },
    collect: (monitor) => ({
      isDraggingImage: !!monitor.isDragging(),
    }),
  });

  return (
    <div style={{ width: '200px', backgroundColor: '#f0f0f0', padding: '10px' }}>
      <div ref={drag} style={{ padding: '20px', cursor: 'move', backgroundColor: '#fff', marginBottom: '10px' }}>
        Text
      </div>
      <div ref={dragImage} style={{ padding: '20px', cursor: 'move', backgroundColor: '#fff' }}>
        Image
      </div>
    </div>
  );
};

export default Sidebar;
