import React from 'react';

const MenuColumnComponent = ({ elementType, properties, onChange }) => {
  return (
    <div>
      <h3>Edit {elementType}</h3>
      {elementType === 'text' && (
        <>
          <div>
            <label>Font Size:</label>
            <input
              type="number"
              value={properties.fontSize}
              onChange={(e) => onChange('fontSize', parseInt(e.target.value, 10))}
            />
          </div>
          <div>
            <label>Color:</label>
            <input
              type="color"
              value={properties.color}
              onChange={(e) => onChange('color', e.target.value)}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default MenuColumnComponent;
