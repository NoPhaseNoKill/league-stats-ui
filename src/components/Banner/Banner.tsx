import React from 'react';
import { Grid } from 'semantic-ui-react';
import { BannerMiddle } from 'components/Banner/BannerMiddle';
import { BannerLeft } from 'components/Banner/BannerLeft';
import { BannerRight } from 'components/Banner/BannerRight';

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
