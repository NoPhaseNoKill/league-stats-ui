import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { StyledComponentWrapper } from 'components/HTML/StyledComponentWrapper';

type Props = {
  src: string;
  children?: ReactNode;
};

const StyledImage = styled.img<Props>`
  max-height: 100px;
  justify-content: center;
`;

export const Image: React.FC<Props> = (props: Props) =>
  StyledComponentWrapper(props, StyledImage);
