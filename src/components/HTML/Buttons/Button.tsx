import styled from 'styled-components';
import { Button as SemanticButton, StrictButtonProps } from 'semantic-ui-react';
import { ThemedComponentProps } from 'types/Theme/ThemedComponentProps';
import { StyledComponentWrapper } from 'components/HTML/StyledComponentWrapper';

const ThemedButton = (props: ThemedComponentProps<StrictButtonProps>) =>
  StyledComponentWrapper(props, SemanticButton);

export const Button = styled(ThemedButton)`
  color: ${(props) => props.theme.colors.lightGrey};
  background: ${(props) => props.theme.colors.charcoal};
  border: 1.5px solid ${(props) => props.theme.colors.red};
  width: 100px;
`;
