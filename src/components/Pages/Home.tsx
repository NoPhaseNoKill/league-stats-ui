import React from 'react';
import { Hero } from 'types/Hero/Hero';
import { Item } from 'types/Item/Item';
import { HeroService } from 'services/HeroService';
import { ItemService } from 'services/ItemService';

type State = {
  heroes: Hero[];
  items: Item[];
};

export class Home extends React.PureComponent {
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
    return <div>This is the homepage</div>;
  }
}
