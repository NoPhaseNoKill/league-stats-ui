import React from 'react';
import styled from 'styled-components';
import { Button as SemanticButton, StrictButtonProps } from 'semantic-ui-react';
import { ThemedComponentProps } from 'types/Theme/ThemedComponentProps';

const ThemedButton = (props: ThemedComponentProps<StrictButtonProps>) => <SemanticButton {...props} />;

export const Button = styled(ThemedButton)`
  color: ${(props) => props.theme.colors.lightGrey};
  background: ${(props) => props.theme.colors.charcoal};
  border: 1.5px solid ${(props) => props.theme.colors.dotaRed};
`;
