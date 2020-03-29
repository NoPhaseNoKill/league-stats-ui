import React from 'react';
import styled from 'styled-components';
import { ThemedComponentProps } from 'types/Theme/ThemedComponentProps';
import { StrictButtonProps } from 'semantic-ui-react';
import { RouteComponentProps, withRouter } from 'react-router';
import { StyledComponentWrapper } from 'components/HTML/StyledComponentWrapper';
import { Button } from 'components/HTML/Buttons/Button';

type Props = RouteComponentProps & {
  route: string;
  label: string;
};

const ThemedButton = (props: ThemedComponentProps<StrictButtonProps>) =>
  StyledComponentWrapper(props, Button);

const StyledButton = styled(ThemedButton)`
  border-radius: 9px;
`;

const RouteredNavigationButton = (props: Props) => {
  const onClick = () => {
    props.history.push(props.route);
  };

  return <StyledButton onClick={onClick}>{props.label}</StyledButton>;
};

export const NavigationButton = withRouter(RouteredNavigationButton);
