// src/components/CustomIcon.js

import React from 'react';
import styled from 'styled-components';

const StyledAmbulanceSideIcon = styled('svg')`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;

const AmbulanceSideIcon = ({ size = 150 }) => {
  return (
<StyledAmbulanceSideIcon xmlns="http://www.w3.org/2000/svg" size={size} fill="#D72641" viewBox="0 0 24 24"><path d="M18 18.5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5m1.5-9H17V12h4.46L19.5 9.5M6 18.5A1.5 1.5 0 0 0 7.5 17A1.5 1.5 0 0 0 6 15.5A1.5 1.5 0 0 0 4.5 17A1.5 1.5 0 0 0 6 18.5M20 8l3 4v5h-2a3 3 0 0 1-3 3a3 3 0 0 1-3-3H9a3 3 0 0 1-3 3a3 3 0 0 1-3-3H1V6c0-1.11.89-2 2-2h14v4h3M8 6v3H5v2h3v3h2v-3h3V9h-3V6H8Z"/></StyledAmbulanceSideIcon>
  );
};

export default AmbulanceSideIcon;
