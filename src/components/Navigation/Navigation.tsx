import React from 'react';
import { NavigationButtons } from './NavigationButtons';
import { Routes } from 'components/Navigation/Routes';
import { Divider } from 'semantic-ui-react';

export const Navigation = () => {
  return (
    <>
      <NavigationButtons />
      <Divider inverted />
      <Routes />
    </>
  );
};
