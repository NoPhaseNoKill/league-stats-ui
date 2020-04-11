import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Button, ButtonProps } from 'components/HTML/Buttons/Button';

type Props = RouteComponentProps &
  ButtonProps & {
    route: string;
    label: string;
  };

const RouteredNavigationButton = (props: Props) => {
  const onClick = () => {
    props.history.push(props.route);
  };

  return <Button content={props.label}
                 onClick={onClick}
         />;
};

export const NavigationButton = withRouter(RouteredNavigationButton);
