import React from 'react';

const MenuColumnParent = ({ selectedElement, onUpdateElement, onRemoveElement }) => {
  if (!selectedElement) return null;

  const handleFontSizeChange = (e) => {
    const newSize = parseInt(e.target.value);
    if (!isNaN(newSize)) {
      const updatedElement = { ...selectedElement, fontSize: newSize };
      onUpdateElement(selectedElement.index, updatedElement);
    }
  };

  const handleColorChange = (e) => {
    const updatedElement = { ...selectedElement, color: e.target.value };
    onUpdateElement(selectedElement.index, updatedElement);
  };

  const handleWidthChange = (e) => {
    const newWidth = parseInt(e.target.value);
    if (!isNaN(newWidth)) {
      const updatedElement = { ...selectedElement, width: newWidth };
      onUpdateElement(selectedElement.index, updatedElement);
    }
  };

  const handleHeightChange = (e) => {
    const newHeight = parseInt(e.target.value);
    if (!isNaN(newHeight)) {
      const updatedElement = { ...selectedElement, height: newHeight };
      onUpdateElement(selectedElement.index, updatedElement);
    }
  };

  const handleTextAlign = (align) => {
    const updatedElement = { ...selectedElement, textAlign: align };
    onUpdateElement(selectedElement.index, updatedElement);
  };

  const handleBold = () => {
    const updatedElement = { ...selectedElement, isBold: !selectedElement.isBold };
    onUpdateElement(selectedElement.index, updatedElement);
  };

  const handleItalic = () => {
    const updatedElement = { ...selectedElement, isItalic: !selectedElement.isItalic };
    onUpdateElement(selectedElement.index, updatedElement);
  };

  const handleRemoveElement = () => {
    onRemoveElement(selectedElement.index);
  };

  return (
    <div style={{ padding: '10px', border: '1px solid #ccc' }}>
      <h3>Edit Element</h3>
      <div>
        <label>Font Size:</label>
        <input
          type="number"
          value={selectedElement.fontSize}
          onChange={handleFontSizeChange}
        />
      </div>
      <div>
        <label>Color:</label>
        <input
          type="color"
          value={selectedElement.color}
          onChange={handleColorChange}
        />
      </div>
      <div>
        <label>Width:</label>
        <input
          type="number"
          value={selectedElement.width}
          onChange={handleWidthChange}
        />
      </div>
      <div>
        <label>Height:</label>
        <input
          type="number"
          value={selectedElement.height}
          onChange={handleHeightChange}
        />
      </div>
      <div>
        <button onClick={handleBold} style={{ fontWeight: selectedElement.isBold ? 'bold' : 'normal' }}>
          Bold
        </button>
        <button onClick={handleItalic} style={{ fontStyle: selectedElement.isItalic ? 'italic' : 'normal' }}>
          Italic
        </button>
        <button onClick={() => handleTextAlign('left')}>Left</button>
        <button onClick={() => handleTextAlign('center')}>Center</button>
        <button onClick={() => handleTextAlign('right')}>Right</button>
      </div>
      <button onClick={handleRemoveElement}>Remove Element</button>
    </div>
  );
};

export default MenuColumnParent;
