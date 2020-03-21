import React from 'react';
import { MatchService } from 'services/MatchService';
import { Match } from 'types/Match/Match';

type State = {
  match: Match | undefined;
};

export class Home extends React.PureComponent {
  state: State = {
    match: undefined,
  };

  componentDidMount = async () => {
    try {
      const match = await MatchService.getById('286985129');
      this.setState({ match });
    } catch (e) {
      console.error(`Error while retrieving data: ${e}`);
    }
  };

  render() {
    return <div>This is the homepage</div>;
  }
}
