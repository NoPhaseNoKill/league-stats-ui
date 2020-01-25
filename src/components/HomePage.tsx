import React from 'react';
import { Banner } from 'components/Banner';
import { HeroService } from 'services/HeroService';

export class HomePage extends React.PureComponent {
  componentDidMount = async () => {
    const heroes = await HeroService.getAll();
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
