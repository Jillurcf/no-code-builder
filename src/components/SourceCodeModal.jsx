import React from 'react';

const SourceCodeModal = ({ elements }) => {
  return (
    <div className="source-code-modal">
      <h3>Source Code</h3>
      <pre>
        {elements.map((element, index) => (
          <div key={index}>
            {element.type === 'text' && `<p>${element.content}</p>`}
            {element.type === 'image' && `<img src="${element.imageUrl}" alt="Uploaded Image" />`}
          </div>
        ))}
      </pre>
    </div>
  );
};

export default SourceCodeModal;
