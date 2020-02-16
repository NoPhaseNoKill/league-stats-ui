import React from 'react';
import { Button, Grid } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import { Heroes, Home } from 'components/Pages';
import { NavigationButton } from 'styles/components/Buttons/StyledNavigationButton';
import styled from 'styled-components';

const PageContentContainer = styled.div`
  border: 1px solid ${(props) => props.theme.colors.lightGrey};
  text-align: center;
  color: ${(props) => props.theme.colors.lightGrey};
  height: 1000px;
`;

export class Navigation extends React.PureComponent {
  render() {
    return (
      <>
        <Grid columns={16}>
          <Grid.Column width={6} />
          <Grid.Column width={1} stretched>
            <NavigationButton route={'/'} label={'Home'} />
          </Grid.Column>
          <Grid.Column width={1} stretched>
            <NavigationButton route={'/heroes'} label={'Heroes'} />
          </Grid.Column>
          <Grid.Column width={1} stretched>
            <Button content={'Sem button 1'} />
          </Grid.Column>
          <Grid.Column />
        </Grid>
        <Switch>
          <Route path="/heroes">
            <PageContentContainer>
              <Heroes />
            </PageContentContainer>
          </Route>
          <Route path="/">
            <PageContentContainer>
              <Home />
            </PageContentContainer>
          </Route>
        </Switch>
      </>
    );
  }
}
