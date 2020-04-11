import React from 'react';
import { NavigationButton, Button } from 'components/HTML';
import { GridColumn } from 'components/HTML/Grid/GridColumn';
import { Grid } from 'components/HTML/Grid/Grid';

export const NavigationButtons = () => {
  return (
    <Grid>
      <GridColumn width={6} />
      <GridColumn width={1}>
        <NavigationButton route={'/'}
                          label={'Home'}
        />
      </GridColumn>
      <GridColumn width={1}>
        <NavigationButton route={'/heroes'}
                          label={'Heroes'}
        />
      </GridColumn>
      <GridColumn width={1}>
        <Button content={'Button 1 long'} />
      </GridColumn>
      <GridColumn width={1} />
      <GridColumn width={1}>
        <Button content={'Button 2 long'} />
      </GridColumn>
    </Grid>
  );
};
