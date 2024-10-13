// src/components/PreviewModal.js
import React from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  top: 50px;
  left: 50px;
  right: 50px;
  bottom: 50px;
  background-color: white;
  z-index: 1000;
  border: 1px solid #ccc;
  padding: 20px;
  overflow: auto;
`;

const CloseButton = styled.button`
  float: right;
  padding: 5px 10px;
  margin-bottom: 20px;
`;

const PreviewModal = ({ items, onClose, showSource }) => {
  const generateHTML = () => {
    return items
      .map((item) => {
        if (item.type === 'text') {
          return `<div style="position: absolute; left: ${item.left}px; top: ${item.top}px;">${item.content}</div>`;
        } else if (item.type === 'image') {
          return `<img src="https://via.placeholder.com/150" alt="placeholder" style="position: absolute; left: ${item.left}px; top: ${item.top}px;" />`;
        }
        return '';
      })
      .join('\n');
  };

  return (
    <ModalWrapper>
      <CloseButton onClick={onClose}>Close</CloseButton>
      {showSource ? (
        <pre>{generateHTML()}</pre>
      ) : (
        <div style={{ position: 'relative', width: '8.5in', height: '11in' }}>
          {items.map((item) => (
            <div key={item.id} style={{ position: 'absolute', left: item.left, top: item.top }}>
              {item.type === 'text' ? <div>{item.content}</div> : <img src="https://via.placeholder.com/150" alt="placeholder" />}
            </div>
          ))}
        </div>
      )}
    </ModalWrapper>
  );
};

export default PreviewModal;
