// src/components/CustomIcon.js

import React from 'react';
import styled from 'styled-components';

const StyledScheduleIcon = styled('svg')`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;

const ScheduleIcon = ({ size = 150 }) => {
  return (
<StyledScheduleIcon xmlns="http://www.w3.org/2000/svg" size={size} viewBox="0 0 48 48"><path fillRule="evenodd" d="M10 23a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2Zm4 0v2h-2v-2h2Zm6-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2Zm2 2h-2v2h2v-2Zm4 0a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2Zm2 0h2v2h-2v-2Zm-16 6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2Zm0 2v2h2v-2h-2Zm6 0a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2Zm2 0h2v2h-2v-2Z" clipRule="evenodd"/><path d="M35 31.5a1 1 0 0 1 1 1v2.086l.707.707a1 1 0 0 1-1.414 1.414L34 35.414V32.5a1 1 0 0 1 1-1Z"/><path fillRule="evenodd" d="M12 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0v-1H9a1 1 0 0 0-1 1v4h26v-4a1 1 0 0 0-1-1h-3V9h3a3 3 0 0 1 3 3v16.07A7.001 7.001 0 0 1 35 42a6.992 6.992 0 0 1-5.745-3H9a3 3 0 0 1-3-3V12a3 3 0 0 1 3-3h3V7Zm16 28a7.001 7.001 0 0 1 6-6.93V18H8v18a1 1 0 0 0 1 1h19.29a7.001 7.001 0 0 1-.29-2Zm7 5a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z" clipRule="evenodd"/><path d="M27 13a1 1 0 0 1-1-1v-1H16V9h10V7a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1Z"/></StyledScheduleIcon>
  );
};

export default ScheduleIcon;
