import React from "react";

const MenuColumnComponent = ({ elementType, properties, onChange }) => {
  const handleFontSizeChange = (e) => {
    onChange("fontSize", e.target.value);
  };

  const handleColorChange = (e) => {
    onChange("color", e.target.value);
  };

  return (
    <div>
      {elementType === "text" && (
        <>
          <div>
            <label>Font Size:</label>
            <input
              type="number"
              value={properties.fontSize}
              onChange={handleFontSizeChange}
              min="1" // Minimum font size
            />
          </div>
          <div>
            <label>Color:</label>
            <input
              type="color"
              value={properties.color}
              onChange={handleColorChange}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default MenuColumnComponent;
