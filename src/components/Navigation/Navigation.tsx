import React from 'react';
import { NavigationButtons } from './NavigationButtons';
import { Routes } from 'components/Navigation/Routes';
import { Divider } from 'components/Divider/Divider';

export const Navigation = () => {
  return (
    <>
      <NavigationButtons />
      <Divider inverted />
      <Routes />
    </>
  );
};
