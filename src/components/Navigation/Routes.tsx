import React from 'react';
import { Route, Switch } from 'react-router';
import { Heroes, Home } from 'components/Pages';
import styled from 'styled-components';

const PageContentContainer = styled.div`
  border: 1px solid ${(props) => props.theme.colors.lightGrey};
  text-align: center;
  color: ${(props) => props.theme.colors.lightGrey};
  height: 1000px;
`;

export const Routes = () => {
  return (
    <Switch>
      <PageContentContainer>
        <Route path="/heroes">
          <Heroes />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </PageContentContainer>
    </Switch>
  );
};
