import styled from 'styled-components';
import React from 'react';

export type ButtonProps = {
  content?: string;
  onClick?: () => void;
};

const StyledButton = styled.button`
  color: ${(props) => props.theme.colors.lightGrey};
  background: ${(props) => props.theme.colors.charcoal};
  border: 1.5px solid ${(props) => props.theme.colors.red};
  width: 100px;
  border-radius: 9px;
`;

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return <StyledButton onClick={props?.onClick}>{props?.content}</StyledButton>;
};
