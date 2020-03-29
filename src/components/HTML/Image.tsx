import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  src: string;
  size: 'massive';
  centered: boolean;
  children?: ReactNode;
};

const StyledImage = styled.img`
  max-height: 100px;
`;

export const Image: React.FC<Props> = (props: Props) => {
  return (
    <StyledImage {...props}
                 style={{ justifyContent: 'centered' }}>
      {props.children}
    </StyledImage>
  );
};
