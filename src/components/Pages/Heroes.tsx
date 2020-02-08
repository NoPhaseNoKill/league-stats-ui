import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import { Hero } from 'components/Pages/Hero';

export const Heroes = () => {
  const match = useRouteMatch();

  return (
    <div>
      <h2>Heroes</h2>
      <ul>
        <li>
          <Link to={`${match.url}/heroId1`}>Hero ID 1</Link>
        </li>
        <li>
          <Link to={`${match.url}/heroId2`}>Hero ID 2</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/:heroId`}>
          <Hero />
        </Route>
        <Route path={match.path}>
          <h3>Please select a hero.</h3>
        </Route>
      </Switch>
    </div>
  );
};
