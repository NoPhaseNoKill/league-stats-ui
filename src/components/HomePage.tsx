import React from 'react';
import { Banner } from 'components/Banner';
import { HeroService } from 'services/HeroService';
import { ItemService } from 'services/ItemService';

export class HomePage extends React.PureComponent {
  componentDidMount = async () => {
    const heroes = await HeroService.getAll();
    const items = await ItemService.getAll();
    console.log('items', items);
    console.log('heroes', heroes);
  };

  render() {
    return (
      <div>
        <Banner />
      </div>
    );
  }
}
