import React from 'react';
import styled from 'styled-components';
import { useDrag } from 'react-dnd';

const SidebarWrapper = styled.div`
  width: 200px;
  background-color: #e9ecef;
  padding: 10px;
`;

const MenuItem = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f8f9fa;
  cursor: pointer;
  text-align: center;
`;

const Sidebar = () => {
  const [{ isDragging }, drag] = useDrag({
    type: 'element',
    item: { type: 'text', content: 'Text Element' },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [{ isDraggingImage }, dragImage] = useDrag({
    type: 'element',
    item: { type: 'image', content: 'Image Element' },
    collect: (monitor) => ({
      isDraggingImage: !!monitor.isDragging(),
    }),
  });

  return (
    <SidebarWrapper>
      <MenuItem ref={drag}>Text</MenuItem>
      <MenuItem ref={dragImage}>Image</MenuItem>
    </SidebarWrapper>
  );
};

export default Sidebar;
