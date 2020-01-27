import React from 'react';
import { Banner } from 'components/Banner';
import { HeroService } from 'services/HeroService';
import { ItemService } from 'services/ItemService';
import { Hero } from 'types/Hero/Hero';
import { Item } from 'types/Item/Item';

type State = {
  heroes: Hero[];
  items: Item[];
};

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
      <div>
        <Banner />
      </div>
    );
  }
}
