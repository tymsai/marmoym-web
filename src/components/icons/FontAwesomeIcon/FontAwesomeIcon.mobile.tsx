import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { Span, I } from '@src/styles/elems'; 

export default ({ icon }) => {
  const className = `fa ${icon}`
  return (
    <I 
      className={className}
      aria-hidden='true'/>
  );
}