import React from 'react';
import styled from 'styled-components';

const TopBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #343a40;
  color: white;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  margin-left: 10px;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

const TopBar = ({ onPreviewClick, onSourceCodeClick }) => {
  return (
    <TopBarWrapper>
      <h3>No-Code Builder</h3>
      <div>
        <Button onClick={onPreviewClick}>Preview</Button>
        <Button onClick={onSourceCodeClick}>See Source Code</Button>
      </div>
    </TopBarWrapper>
  );
};

export default TopBar;
