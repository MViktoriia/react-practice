import React from 'react';
import { StyledControls } from './Counter.styled';

const Controls = ({ onIncrement, onDecrement }) => (
  <div>
    <StyledControls type="button" onClick={onIncrement}>
      Увеличить на 1
    </StyledControls>
    <StyledControls type="button" onClick={onDecrement}>
      Уменьшить на 1
    </StyledControls>
  </div>
);

export default Controls;
