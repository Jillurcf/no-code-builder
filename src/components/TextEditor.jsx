// src/components/TextEditor.js
import React from 'react';
import styled from 'styled-components';

const EditorWrapper = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  min-height: 50px; /* Minimum height for the text area */
  overflow-wrap: break-word; /* Allows breaking long words */
  background-color: #fff; /* White background for visibility */
  display: flex;
  flex-direction: column;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: auto;
  border: none;
  outline: none;
//   resize: none; /* Disable resizing */
  font-family: Arial, sans-serif; /* Set desired font */
  font-size: 16px; /* Adjust font size */
  direction: ltr; /* Ensure left-to-right text direction */
  text-align: left; /* Align text to the left */
`;

const TextEditor = ({ content, onChange }) => {
  return (
    <EditorWrapper>
      <TextArea
        value={content}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Write your text here..."
      />
    </EditorWrapper>
  );
};

export default TextEditor;
