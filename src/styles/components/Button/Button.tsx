import React from 'react';
import styled from 'styled-components';
import { Button as SemanticButton, StrictButtonProps } from 'semantic-ui-react';
import { ThemedComponentProps } from 'types/Theme/ThemedComponentProps';

const TypedButton = (props: ThemedComponentProps<StrictButtonProps>) => <SemanticButton {...props} />;

export const Button = styled(TypedButton)`
  &&& {
    color: ${(props) => props.theme.colors.main};
    font-size: ${(props) => props.theme.fontSize};
  }
`;
