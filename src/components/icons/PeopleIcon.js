// src/components/CustomIcon.js

import React from 'react';
import styled from 'styled-components';

const StyledPeopleIcon = styled('svg')`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;

const PeopleIcon = ({ size = 150 }) => {
  return (
   <StyledPeopleIcon xmlns="http://www.w3.org/2000/svg" size={size} viewBox="0 0 20 20"><g opacity=".2"><path d="M9.75 7.75a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"/><path fillRule="evenodd" d="M6.75 8.75a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 2a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z" clipRule="evenodd"/><path fillRule="evenodd" d="M6.8 11.5A1.5 1.5 0 0 0 5.3 13v1.5a1 1 0 0 1-2 0V13a3.5 3.5 0 0 1 7 0v.5a1 1 0 1 1-2 0V13a1.5 1.5 0 0 0-1.5-1.5Z" clipRule="evenodd"/><path d="M12.75 7.75a3 3 0 1 0 6 0a3 3 0 0 0-6 0Z"/><path fillRule="evenodd" d="M15.75 8.75a1 1 0 1 1 0-2a1 1 0 0 1 0 2Zm0 2a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z" clipRule="evenodd"/><path fillRule="evenodd" d="M15.7 11.5a1.5 1.5 0 0 1 1.5 1.5v1.5a1 1 0 1 0 2 0V13a3.5 3.5 0 0 0-7 0v.5a1 1 0 1 0 2 0V13a1.5 1.5 0 0 1 1.5-1.5Z" clipRule="evenodd"/><path fillRule="evenodd" d="M11.3 14.25a1.5 1.5 0 0 0-1.5 1.5v1.5a1 1 0 0 1-2 0v-1.5a3.5 3.5 0 0 1 7 0v1.5a1 1 0 1 1-2 0v-1.5a1.5 1.5 0 0 0-1.5-1.5Z" clipRule="evenodd"/><path d="M14.25 10.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"/><path fillRule="evenodd" d="M11.25 11.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 2a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z" clipRule="evenodd"/><path d="M4.25 11.5h5v4h-5v-4Zm9 0h5v4h-5v-4Z"/><path d="M9.25 13.5h4l.5 4.75h-5l.5-4.75Z"/></g><path fillRule="evenodd" d="M5 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm0 1a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z" clipRule="evenodd"/><path fillRule="evenodd" d="M3.854 8.896a.5.5 0 0 1 0 .708l-.338.337A3.47 3.47 0 0 0 2.5 12.394v1.856a.5.5 0 1 1-1 0v-1.856a4.47 4.47 0 0 1 1.309-3.16l.337-.338a.5.5 0 0 1 .708 0Zm11.792-.3a.5.5 0 0 0 0 .708l.338.337A3.469 3.469 0 0 1 17 12.094v2.156a.5.5 0 0 0 1 0v-2.156a4.47 4.47 0 0 0-1.309-3.16l-.337-.338a.5.5 0 0 0-.708 0Z" clipRule="evenodd"/><path fillRule="evenodd" d="M14 9a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm0 1a3 3 0 1 1 0-6a3 3 0 0 1 0 6Zm-4.5 3.25a2.5 2.5 0 0 0-2.5 2.5v1.3a.5.5 0 0 1-1 0v-1.3a3.5 3.5 0 0 1 7 0v1.3a.5.5 0 1 1-1 0v-1.3a2.5 2.5 0 0 0-2.5-2.5Z" clipRule="evenodd"/><path fillRule="evenodd" d="M9.5 11.75a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm0 1a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z" clipRule="evenodd"/></StyledPeopleIcon>
  );
};

export default PeopleIcon;
