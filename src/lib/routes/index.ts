import { Home, Drum } from 'page';

export const route = [
  {
    path: '/',
    page: Home,
    exact: true,
  },
  {
    path: '/drum-kit',
    page: Drum,
    exact: true,
  },
];