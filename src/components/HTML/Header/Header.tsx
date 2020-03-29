import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { StyledComponentWrapper } from 'components/HTML/StyledComponentWrapper';

type Props = {
  textAlign: 'center';
  children?: ReactNode;
};

const StyledHeader = styled.h1<Props>`
  text-align: ${(props) => props.textAlign};
`;

export const Header: React.FC<Props> = (props: Props) =>
  StyledComponentWrapper(props, StyledHeader);
