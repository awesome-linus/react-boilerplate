import React from 'react';
import { MemoryRouter } from 'react-router';
import Header from './Header';

export default {
  title: 'Header',
  decorators: [
    (storyFn: Function) => (
      <MemoryRouter initialEntries={['/', '/']}>{storyFn()}</MemoryRouter>
    )
  ]
};

export const showHeader = () => <Header />;
