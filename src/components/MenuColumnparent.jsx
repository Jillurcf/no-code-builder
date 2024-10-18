import React, { useEffect, useState } from 'react';

const MenuColumnParent = ({ selectedElement, onUpdateElement }) => {
  const [textProperties, setTextProperties] = useState({ fontSize: 16, color: '#000000' });

  useEffect(() => {
    if (selectedElement) {
      setTextProperties({
        fontSize: selectedElement.fontSize,
        color: selectedElement.color,
      });
    }
  }, [selectedElement]);

  const handleTextChange = (property, value) => {
    if (selectedElement) {
      const updatedElement = { ...selectedElement, [property]: value };
      onUpdateElement(selectedElement.index, updatedElement);
      setTextProperties({ ...textProperties, [property]: value }); // Update local state for immediate feedback
    }
  };

  return (
    <div style={{ padding: '10px', border: '1px solid #ccc' }}>
      {selectedElement ? (
        <>
          <div>
            <label>Font Size:</label>
            <input
              type="number"
              value={textProperties.fontSize}
              onChange={(e) => handleTextChange('fontSize', Number(e.target.value))}
            />
          </div>
          <div>
            <label>Color:</label>
            <input
              type="color"
              value={textProperties.color}
              onChange={(e) => handleTextChange('color', e.target.value)}
            />
          </div>
        </>
      ) : (
        <p>Select an element to edit its properties.</p>
      )}
    </div>
  );
};

export default MenuColumnParent;

