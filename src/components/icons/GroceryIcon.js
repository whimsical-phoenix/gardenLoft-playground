// src/components/CustomIcon.js

import React from 'react';
import styled from 'styled-components';

const StyledGroceryIcon = styled('svg')`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;

const GroceryIcon = ({ size = 150 }) => {
  return (
<StyledGroceryIcon xmlns="http://www.w3.org/2000/svg" size={size} viewBox="0 0 24 24"><path d="M16 22q-2.5 0-4.25-1.75T10 16q0-2.5 1.75-4.25T16 10q2.5 0 4.25 1.75T22 16q0 2.5-1.75 4.25T16 22m0-2q1.65 0 2.825-1.175T20 16q0-1.65-1.175-2.825T16 12q-1.65 0-2.825 1.175T12 16q0 1.65 1.175 2.825T16 20M4 20q-.825 0-1.412-.587T2 18v-7.6q0-.2.038-.4t.112-.4l2-4.6H4q-.425 0-.712-.288T3 4V3q0-.425.288-.712T4 2h7q.425 0 .713.288T12 3v1q0 .425-.288.713T11 5h-.15l1.65 3.8q-.475.25-.9.525t-.8.625L8.7 5H6.3L4 10.4V18h4.25q.125.525.337 1.038T9.1 20zM16 9q-1.05 0-1.775-.725T13.5 6.5q0-1.05.725-1.775T16 4zq0-1.05.725-1.775T18.5 6.5q1.05 0 1.775.725T21 9z"/></StyledGroceryIcon>
  );
};

export default GroceryIcon;
