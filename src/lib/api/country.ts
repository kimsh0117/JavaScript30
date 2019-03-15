import axios, { AxiosPromise } from 'axios';

export const getCountries = (url: string): AxiosPromise =>
  axios.get(url).then(results => results);