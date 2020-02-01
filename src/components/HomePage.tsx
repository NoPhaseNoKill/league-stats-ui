import React from 'react';
import { Banner } from 'components/Banner/Banner';
import { HeroService } from 'services/HeroService';
import { ItemService } from 'services/ItemService';
import { Hero } from 'types/Hero/Hero';
import { Item } from 'types/Item/Item';
import styled from 'styled-components';
import { Navigation } from 'components/Navigation/Navigation';
import { Divider, Grid, GridRow } from 'semantic-ui-react';

type State = {
  heroes: Hero[];
  items: Item[];
};

const StyledHomePage = styled.div`
  background: ${(props) => props.theme.colors.background};
`;

export class HomePage extends React.PureComponent {
  state: State = {
    heroes: [],
    items: [],
  };

  componentDidMount = async () => {
    const heroes = await HeroService.getAll();
    const items = await ItemService.getAll();
    this.setState({ heroes, items });
  };

  render() {
    return (
      <StyledHomePage>
        <Grid>
          <GridRow>
            <Banner />
          </GridRow>
        </Grid>
        <Divider inverted />
        <Navigation />
      </StyledHomePage>
    );
  }
}
