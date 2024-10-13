import React from 'react';
import styled from 'styled-components';

const MenuColumn = styled.div`
  width: 200px;
  background-color: #f8f9fa;
  padding: 10px;
`;

const SubMenu = styled.div`
  margin-top: 20px;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
`;

const ColorInput = styled.input`
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
`;

// const MenuColumnComponent = ({ selectedElement, onTextChange, onImageChange }) => {
//   return (
//     <MenuColumn>
//       {/* SubMenu for Text Properties */}
//       <SubMenu isVisible={selectedElement === 'text'}>
//         <div>Text Properties</div>
//         <Label htmlFor="fontSize">Font Size</Label>
//         <Input
//           type="number"
//           id="fontSize"
//           name="fontSize"
//           min="10"
//           max="100"
//           defaultValue="16"
//           onChange={(e) => onTextChange('fontSize', e.target.value)}
//         />
//         <Label htmlFor="color">Color</Label>
//         <ColorInput
//           type="color"
//           id="color"
//           name="color"
//           defaultValue="#000000"
//           onChange={(e) => onTextChange('color', e.target.value)}
//         />
//       </SubMenu>

//       {/* SubMenu for Image Properties */}
//       <SubMenu isVisible={selectedElement === 'image'}>
//         <div>Image Properties</div>
//         <Label htmlFor="width">Width</Label>
//         <Input
//           type="number"
//           id="width"
//           name="width"
//           min="50"
//           max="1000"
//           defaultValue="300"
//           onChange={(e) => onImageChange('width', e.target.value)}
//         />
//         <Label htmlFor="height">Height</Label>
//         <Input
//           type="number"
//           id="height"
//           name="height"
//           min="50"
//           max="1000"
//           defaultValue="300"
//           onChange={(e) => onImageChange('height', e.target.value)}
//         />
//       </SubMenu>
//     </MenuColumn>
//   );
// };

// export default MenuColumnComponent;

const MenuColumnComponent = ({ elementType, properties, onChange }) => {
  return (
    <div>
      {elementType === 'text' && (
        <div>
          <label>Font Size:</label>
          <input
            type="number"
            value={properties.fontSize}
            onChange={(e) => onChange('fontSize', e.target.value)}
          />
          <label>Color:</label>
          <input
            type="color"
            value={properties.color}
            onChange={(e) => onChange('color', e.target.value)}
          />
        </div>
      )}
      {elementType === 'image' && (
        <div>
          <label>Width:</label>
          <input
            type="number"
            value={properties.width}
            onChange={(e) => onChange('width', e.target.value)}
          />
          <label>Height:</label>
          <input
            type="number"
            value={properties.height}
            onChange={(e) => onChange('height', e.target.value)}
          />
        </div>
      )}
    </div>
  );
};

export default MenuColumnComponent;