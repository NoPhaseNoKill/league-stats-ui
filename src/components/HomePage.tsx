import React from 'react';
import { Banner } from 'components/Banner/Banner';
import { HeroService } from 'services/HeroService';
import { ItemService } from 'services/ItemService';
import { Hero } from 'types/Hero/Hero';
import { Item } from 'types/Item/Item';
import styled from 'styled-components';
import { Navigation } from 'components/Navigation/Navigation';
import { Divider } from 'semantic-ui-react';

type State = {
  heroes: Hero[];
  items: Item[];
};

const StyledHomePage = styled.div`
  background: ${(props) => props.theme.colors.background};
`;

const PageContainer = styled.div`
  border: 1px solid ${(props) => props.theme.colors.lightGrey};
  text-align: center;
  color: ${(props) => props.theme.colors.lightGrey};
`;

export class HomePage extends React.PureComponent {
  state: State = {
    heroes: [],
    items: [],
  };

  componentDidMount = async () => {
    try {
      const heroes = await HeroService.getAll();
      const items = await ItemService.getAll();
      this.setState({ heroes, items });
    } catch (e) {
      console.error(`Error while retrieving data: ${e}`);
    }
  };

  render() {
    return (
      <StyledHomePage>
        <Banner />
        <Divider inverted />
        <Navigation />
        <Divider inverted />
        <PageContainer>Some content to go here</PageContainer>
      </StyledHomePage>
    );
  }
}
