import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  textAlign: 'center';
  children?: ReactNode;
};

const StyledHeader = styled.h1``;

export const Header: React.FC<Props> = (props: Props) => {
  return (
    <StyledHeader {...props}
                  style={{ textAlign: props.textAlign }}>
      {props.children}
    </StyledHeader>
  );
};
