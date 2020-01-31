import React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { Button as SemanticButton, ButtonProps as SemanticButtonProps } from 'semantic-ui-react';

type ButtonProps = SemanticButtonProps & {
  theme: DefaultTheme;
};

const TypedButton = (props: ButtonProps) => <SemanticButton {...props} />;

export const Button = styled(TypedButton)`
  &&& {
    color: ${(props) => props.theme.colors.main};
    font-size: ${(props) => props.theme.fontSize};
  }
`;
