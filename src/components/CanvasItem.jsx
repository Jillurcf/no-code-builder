import React from 'react';
import { useDrag } from 'react-dnd';
import styled from 'styled-components';

const ItemWrapper = styled.div`
  position: absolute;
  left: ${({ left }) => left}px;
  top: ${({ top }) => top}px;
  cursor: move;
  padding: 5px;
`;

const CanvasItem = ({ index, element, onUpdateElement, onRemoveElement }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'element',
    item: { index, ...element },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <ItemWrapper
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      left={element.left}
      top={element.top}
    >
      {element.type === 'text' && <div>{element.content}</div>}
      {element.type === 'image' && (
        <img src={element.content || 'https://via.placeholder.com/100'} alt="Image Element" width="100" />
      )}
      <button onClick={() => onRemoveElement(index)}>Remove</button>
    </ItemWrapper>
  );
};

export default CanvasItem;
