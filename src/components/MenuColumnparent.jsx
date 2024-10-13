import React, { useState } from 'react';
import MenuColumnComponent from './MenuColumn';

const MenuColumnParent = ({ selectedElement }) => {
  const [textProperties, setTextProperties] = useState({ fontSize: 16, color: '#000000' });
  const [imageProperties, setImageProperties] = useState({ width: 300, height: 300 });

  const handleTextChange = (property, value) => {
    setTextProperties({ ...textProperties, [property]: value });
  };

  const handleImageChange = (property, value) => {
    setImageProperties({ ...imageProperties, [property]: value });
  };

  return (
    <div>
      <MenuColumnComponent
        selectedElement={selectedElement}
        onTextChange={handleTextChange}
        onImageChange={handleImageChange}
      />
    </div>
  );
};

export default MenuColumnParent;
