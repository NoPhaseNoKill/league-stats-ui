import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';

it('renders without crashing', () => {
  console.log(`App.test.tsx starting`);
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
  console.log(`App.test.tsx completed`);
});
