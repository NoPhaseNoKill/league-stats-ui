import React from 'react';
import { Grid } from 'semantic-ui-react';
import { BannerMiddle, BannerRight, BannerLeft } from '.';

export class Banner extends React.PureComponent {
  render() {
    return (
      <Grid columns={3}>
        <BannerLeft />
        <BannerMiddle />
        <BannerRight />
      </Grid>
    );
  }
}
