import React from 'react';
import { StyledComponentWrapper } from 'components/HTML/StyledComponentWrapper';
import styled from 'styled-components';

type DividerProps = {
  inverted?: boolean;
};

const StyledDivider = styled.div`
  border-top: 1px solid rgba(34, 36, 38, 0.15);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-left-color: rgba(34, 36, 38, 0.15);
  border-right-color: rgba(255, 255, 255, 0.15);
  margin: 1rem 0;
`;

export const Divider: React.FC<DividerProps> = (props: DividerProps) => {
  return StyledComponentWrapper(props, StyledDivider);
};
