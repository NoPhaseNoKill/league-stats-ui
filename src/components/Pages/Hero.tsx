import React from 'react';
import { useParams } from 'react-router';

export const Hero = () => {
  const { heroId } = useParams();
  return <h3>Requested hero ID: {heroId}</h3>;
};
