import React, { ReactNode, ReactNodeArray } from 'react';
import styled from 'styled-components';
import { StyledComponentWrapper } from 'components/HTML/StyledComponentWrapper';

type Props = {
  children?: ReactNode | ReactNodeArray;
};

const StyledColumn = styled.div`
  display: flex;
`;

export const Grid: React.FC<Props> = (props: Props) => {
  return StyledComponentWrapper(props, StyledColumn);
};
