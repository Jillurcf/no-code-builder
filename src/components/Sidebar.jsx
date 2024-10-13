import React, { useState } from 'react';
import styled from 'styled-components';
import { useDrag } from 'react-dnd';
import MenuColumnParent from './MenuColumnParent';

// Styled components for layout and appearance
const SidebarWrapper = styled.div`
  width: 400px;
  background-color: #e9ecef;
  padding: 10px;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
`;

const MenuColumn = styled.div`
  width: 50%;
`;

const MenuItem = styled.div`
  padding: 20px;
  margin-bottom: 10px;
  background-color: #f8f9fa;
  cursor: pointer;
  text-align: center;
`;

// Sidebar component
const Sidebar = () => {
  const [selectedElement, setSelectedElement] = useState(null);

  // Drag for Text element
  const [{ isDragging }, drag] = useDrag({
    type: 'element',
    item: { type: 'text', content: 'Text Element' },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  // Drag for Image element
  const [{ isDraggingImage }, dragImage] = useDrag({
    type: 'element',
    item: { type: 'image', content: 'Image Element' },
    collect: (monitor) => ({
      isDraggingImage: !!monitor.isDragging(),
    }),
  });

  // Handle submenu visibility toggle
  const handleElementClick = (elementType) => {
    setSelectedElement(elementType); // Set the selected element to text or image
  };

  return (
    <SidebarWrapper>
      <Menu>
        {/* First column */}
        <MenuColumn>
          <MenuItem ref={drag} onClick={() => handleElementClick('text')}>Text</MenuItem>
          <MenuItem ref={dragImage} onClick={() => handleElementClick('image')}>Image</MenuItem>
        </MenuColumn>
        {/* Submenu controlled in MenuColumnParent */}
      <div className='px-2'>
      <MenuColumnParent selectedElement={selectedElement} />
      </div>
      </Menu>
    </SidebarWrapper>
  );
};

export default Sidebar;
