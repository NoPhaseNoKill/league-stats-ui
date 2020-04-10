import React from 'react';
import styled from 'styled-components';
import { StyledComponentWrapper } from 'components/HTML/StyledComponentWrapper';

type Props = {
  width: GridColumnWidth;
};

type GridColumnWidth =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16;

const StyledColumn = styled.div<Props>`
  min-width: ${(props) => (props.width / 15) * 100}%;
  max-width: ${(props) => (props.width / 15) * 100}%;
  justify-content: center;
  display: flex;
`;

export const GridColumn: React.FC<Props> = (props: Props) => {
  return StyledComponentWrapper(props, StyledColumn);
};
