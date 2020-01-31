import React from 'react';
import { Banner } from 'components/Banner/Banner';
import { HeroService } from 'services/HeroService';
import { ItemService } from 'services/ItemService';
import { Hero } from 'types/Hero/Hero';
import { Item } from 'types/Item/Item';
import { Button, ButtonBlue } from 'styles/components/Button';
import styled from 'styled-components';

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
        <Banner />
        <Button content={'small green button'} />
        <ButtonBlue content={'big blue button'} />
      </StyledHomePage>
    );
  }
}
