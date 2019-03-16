import { withSplitting } from 'hoc';

export const Home = withSplitting(() => import ('./Home'));
export const Drum = withSplitting(() => import ('./Drum'));
export const Clock = withSplitting(() => import ('./Clock'));
export const Panels = withSplitting(() => import ('./Panels'));
export const Ajax = withSplitting(() => import ('./Ajax'));

// export { default as Home } from './Home';
// export { default as Drum } from './Drum';
// export { default as Clock } from './Clock';
// export { default as Panels } from './Panels';
// export { default as Ajax } from './Ajax';
