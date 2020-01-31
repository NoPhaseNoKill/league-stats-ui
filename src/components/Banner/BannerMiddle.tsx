import React from 'react';
import { Grid, Header, Image } from 'semantic-ui-react';

export class BannerMiddle extends React.PureComponent {
  render() {
    return (
      <Grid.Column width={4}>
        <Header as="h2" icon textAlign="center">
          <Image
            centered
            size="massive"
            src="http://icons.iconarchive.com/icons/bokehlicia/pacifica/256/steam-2-icon.png"
          />
          <Header.Content>DOTA STATS</Header.Content>
          <Header.Subheader>Everything a professional could need.</Header.Subheader>
        </Header>
      </Grid.Column>
    );
  }
}
