import React from 'react';
import SyncCountApp from '../containers/SyncCountApp';
import AsyncCountApp from '../containers/AsyncCountApp';

type Route = {
  name: string;
  path: string;
  component: React.FC;
};

export type Routes = Route[];

export const routes: Routes = [
  {
    name: 'SyncCountApp',
    path: '/',
    component: SyncCountApp
  },
  {
    name: 'AsyncCountApp',
    path: '/async-counter',
    component: AsyncCountApp
  }
];
