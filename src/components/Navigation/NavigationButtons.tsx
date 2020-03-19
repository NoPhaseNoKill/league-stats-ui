import React from 'react';
import { Button, Grid } from 'semantic-ui-react';
import { NavigationButton } from 'styles/components/Buttons';

export const NavigationButtons = () => {
  return (
    <Grid columns={16}>
      <Grid.Column width={6} />
      <Grid.Column width={1}
                   stretched>
        <NavigationButton route={'/'}
                          label={'Home'} />
      </Grid.Column>
      <Grid.Column width={1}
                   stretched>
        <NavigationButton route={'/heroes'}
                          label={'Heroes'} />
      </Grid.Column>
      <Grid.Column width={1}
                   stretched>
        <Button content={'Sem button 1'} />
      </Grid.Column>
      <Grid.Column />
      <Grid.Column width={1}
                   stretched>
        <Button content={'Sem button 2'} />
      </Grid.Column>
      <Grid.Column width={1}
                   stretched>
        <Button content={'Sem button 3'} />
      </Grid.Column>
      <Grid.Column />
      <Grid.Column />
    </Grid>
  );
};
