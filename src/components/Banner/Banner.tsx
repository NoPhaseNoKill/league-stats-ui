import React from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import styled from 'styled-components';
import { Header, SubHeader, Image } from 'components/HTML';

const StyledContent = styled.div`
  color: ${(props) => props.theme.colors.lightGrey};
`;

export class Banner extends React.PureComponent {
  render() {
    return (
      <Grid columns={3}>
        <GridColumn width={6} />
        <GridColumn width={4}>
          <Header textAlign={'center'}>
            <Image src="https://img.icons8.com/dusk/64/000000/league-of-legends.png" />
            <StyledContent>LEAGUE STATS</StyledContent>
            <SubHeader>Everything a professional needs.</SubHeader>
          </Header>
        </GridColumn>
        <GridColumn width={6} />
      </Grid>
    );
  }
}
