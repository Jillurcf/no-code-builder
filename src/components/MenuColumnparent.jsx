// import React, { useState } from 'react';
// import MenuColumnComponent from './MenuColumn';

// const MenuColumnParent = ({ selectedElement }) => {
//   const [textProperties, setTextProperties] = useState({ fontSize: 16, color: '#000000' });
//   const [imageProperties, setImageProperties] = useState({ width: 300, height: 300 });

//   const handleTextChange = (property, value) => {
//     setTextProperties({ ...textProperties, [property]: value });
//   };

//   const handleImageChange = (property, value) => {
//     setImageProperties({ ...imageProperties, [property]: value });
//   };

//   return (
//     <div>
//       <MenuColumnComponent
//         selectedElement={selectedElement}
//         onTextChange={handleTextChange}
//         onImageChange={handleImageChange}
//       />
//     </div>
//   );
// };

// export default MenuColumnParent;

import React, { useState, useEffect } from 'react';
import MenuColumnComponent from './MenuColumn';

const MenuColumnParent = ({ selectedElement }) => {
  const [textProperties, setTextProperties] = useState({ fontSize: 16, color: '#000000' });
  const [imageProperties, setImageProperties] = useState({ width: 300, height: 300 });

  useEffect(() => {
    // Reset properties when the selectedElement changes
    if (selectedElement === 'text') {
      console.log('Selected Element:', selectedElement);
      setTextProperties({ fontSize: 16, color: '#000000' }); // Reset text properties to default
    } else if (selectedElement === 'image') {
      setImageProperties({ width: 300, height: 300 }); // Reset image properties to default
    }
  }, [selectedElement]);

  const handleTextChange = (property, value) => {
    setTextProperties({ ...textProperties, [property]: value });
  };

  const handleImageChange = (property, value) => {
    setImageProperties({ ...imageProperties, [property]: value });
  };

  return (
    <div>
      {selectedElement ? (
        <>
          {selectedElement === 'text' && (
            <MenuColumnComponent
              elementType="text"
              properties={textProperties}
              onChange={handleTextChange}
            />
          )}
          {selectedElement === 'image' && (
            <MenuColumnComponent
              elementType="image"
              properties={imageProperties}
              onChange={handleImageChange}
            />
          )}
        </>
      ) : (
        <p>Select an element to edit its properties.</p> // Message when nothing is selected
      )}
    </div>
  );
};

export default MenuColumnParent;
