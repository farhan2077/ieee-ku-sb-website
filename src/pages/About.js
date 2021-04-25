import React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import MetaDecorator from '../components/meta/MetaDecorator';

export default function About() {
  return (
    <div>
      <MetaDecorator title="About" description="about page" />
      <p>This is the about page</p>
      <RouteLink to="/">Go to home page</RouteLink>
    </div>
  );
}
