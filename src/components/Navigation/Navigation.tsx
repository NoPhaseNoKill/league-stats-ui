import React from 'react';
import { Button, Grid } from 'semantic-ui-react';
import { NavigationButton } from 'styles/components/Buttons';

export class Navigation extends React.PureComponent {
  render() {
    return (
      <>
        <Grid columns={16}>
          <Grid.Column width={6} />
          <Grid.Column width={1} stretched>
            <NavigationButton content={'Nav Button 1'} />
          </Grid.Column>
          <Grid.Column width={1} stretched>
            <NavigationButton content={'Nav Button 2'} />
          </Grid.Column>
          <Grid.Column width={1} stretched>
            <Button content={'Sem button 1'} />
          </Grid.Column>
          <Grid.Column width={1} stretched>
            <Button content={'Sem button 2'} />
          </Grid.Column>
          <Grid.Column />
        </Grid>
      </>
    );
  }
}
