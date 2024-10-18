import React, { useState, useEffect } from 'react';

const Editor = ({ selectedElement, onUpdateElement }) => {
  const [fontSize, setFontSize] = useState(selectedElement.fontSize);
  const [color, setColor] = useState(selectedElement.color);
  const [bold, setBold] = useState(selectedElement.bold || false);
  const [italic, setItalic] = useState(selectedElement.italic || false);

  useEffect(() => {
    setFontSize(selectedElement.fontSize);
    setColor(selectedElement.color);
    setBold(selectedElement.bold || false);
    setItalic(selectedElement.italic || false);
  }, [selectedElement]);

  const handleFontSizeChange = (e) => {
    const newSize = parseInt(e.target.value, 10);
    setFontSize(newSize);
    onUpdateElement({ ...selectedElement, fontSize: newSize });
  };

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setColor(newColor);
    onUpdateElement({ ...selectedElement, color: newColor });
  };

  const handleBoldToggle = () => {
    const newBold = !bold;
    setBold(newBold);
    onUpdateElement({ ...selectedElement, bold: newBold });
  };

  const handleItalicToggle = () => {
    const newItalic = !italic;
    setItalic(newItalic);
    onUpdateElement({ ...selectedElement, italic: newItalic });
  };

  return (
    <div style={{ width: '200px', padding: '10px', backgroundColor: '#f9f9f9' }}>
      <h3>Editor</h3>
      {selectedElement && (
        <>
          <div>
            <label>Font Size:</label>
            <input
              type="number"
              value={fontSize}
              onChange={handleFontSizeChange}
              style={{ marginLeft: '10px', width: '60px' }}
            />
          </div>
          <div>
            <label>Color:</label>
            <input type="color" value={color} onChange={handleColorChange} />
          </div>
          <div>
            <button onClick={handleBoldToggle} style={{ margin: '5px' }}>
              {bold ? 'Unbold' : 'Bold'}
            </button>
            <button onClick={handleItalicToggle} style={{ margin: '5px' }}>
              {italic ? 'Unitalic' : 'Italic'}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Editor;
