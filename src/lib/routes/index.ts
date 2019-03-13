import { Home, Drum, Clock } from 'page';

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
  {
    path: '/clock',
    page: Clock,
    exact: true,
  },
];