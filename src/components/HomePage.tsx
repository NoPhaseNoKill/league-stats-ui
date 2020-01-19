import React from 'react';
import { Banner } from 'components/Banner';

export class HomePage extends React.PureComponent {
  componentDidMount = async () => {
    const backendCall = await this.callBackendAPI();
    console.log('backendCall', backendCall);
  };

  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  render() {
    return (
      <div>
        <Banner />
      </div>
    );
  }
}
