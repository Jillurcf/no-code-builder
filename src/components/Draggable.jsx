import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import styled from 'styled-components';

const ItemWrapper = styled.div`
  position: absolute;
  left: ${({ left }) => left}px;
  top: ${({ top }) => top}px;
  cursor: move;
  border: ${({ isSelected }) => (isSelected ? '2px solid blue' : 'none')};
`;

const EditableText = styled.textarea`
  font-size: ${({ fontSize }) => fontSize}px;
  color: ${({ color }) => color};
  border: none;
  background: none;
  resize: none;
  width: 100%;
`;

export const DraggableItem = ({ element, index, onSelectElement, onUpdateElement, isSelected }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'element',
    item: { index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [{ isOver }, drop] = useDrop({
    accept: 'element',
    hover: (item, monitor) => {
      const delta = monitor.getDifferenceFromInitialOffset();
      if (delta) {
        const left = Math.round(element.left + delta.x);
        const top = Math.round(element.top + delta.y);
        onUpdateElement(index, { left, top });
      }
    },
  });

  return (
    <ItemWrapper
      ref={(node) => drag(drop(node))}  // Make the item both draggable and droppable
      left={element.left}
      top={element.top}
      isSelected={isSelected}
      onClick={() => onSelectElement(index)}  // Select the item when clicked
    >
      {element.type === 'text' && (
        <EditableText
          fontSize={element.fontSize}
          color={element.color}
          value={element.content}
          onChange={(e) => onUpdateElement(index, { content: e.target.value })}  // Inline text editing
        />
      )}
      {element.type === 'image' && (
        <img
          src={element.content}
          alt="Draggable Element"
          style={{ width: element.width || 100, height: element.height || 100 }}
        />
      )}
    </ItemWrapper>
  );
};
