import React, { FC, useEffect, useState } from 'react';
import { throttle } from 'lodash';

import styled from 'styled-components';

interface Box {
  dragging: boolean;
  direction: 'x' | 'y';
}

export const DraggableBox = styled.div.attrs<Box>(({ direction, ...rest }) => ({
  ...rest,
  direction: direction ?? 'x',
}))<Box>`
  flex-shrink: 0;

  ${({ direction }) =>
    direction === 'x'
      ? `
        width: 10px;
        height: 100%;`
      : `
        width: 100%;
        height: 10px;`}
  background-color: ${({ dragging }) => (dragging ? 'coral' : 'none')};

  transition: background-color 0.05s;
  transition-timing-function: linear;

  &:hover {
    cursor: ${({ direction }) => (direction === 'x' ? 'col-resize' : 'row-resize')};
    ${({ dragging }) => !dragging && 'background-color: rgba(20, 21, 24, 0.19);'};

    // prevent text selection during drag
    user-select: none;
  }
`;
export type OnDragging = (pos: { x: number; y: number }) => void;

export const Draggable: FC<{ onDragging: OnDragging; direction: 'x' | 'y' }> = ({
  onDragging,
  direction,
}) => {
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const throttledDrag = dragHandler(onDragging);

    if (dragging) {
      document.addEventListener('mousemove', throttledDrag);
      document.addEventListener(
        'mouseup',
        () => {
          setDragging(false);
          document.removeEventListener('mousemove', throttledDrag);
        },
        { once: true }
      );
    }
  }, [dragging, onDragging]);

  return (
    <DraggableBox
      direction={direction}
      dragging={dragging}
      onMouseDown={() => {
        setDragging(true);
      }}
    />
  );
};

function dragHandler(onDragged: OnDragging) {
  return throttle((e) => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const x = Math.round((e.clientX / w) * 100);
    const y = Math.round(((h - e.clientY) / h) * 100);
    onDragged({ x, y });
  }, 100);
}
