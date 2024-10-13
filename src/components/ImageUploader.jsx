import React, { useState } from 'react';

const ImageUploader = ({ imageUrl, onUpload }) => {
  const [image, setImage] = useState(imageUrl);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
      onUpload(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      {image ? (
        <img src={image} alt="Uploaded" style={{ width: '100%', height: 'auto' }} />
      ) : (
        <input type="file" accept="image/*" onChange={handleImageChange} />
      )}
    </div>
  );
};

export default ImageUploader;
