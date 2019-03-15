import * as types from 'store/constants';
import { countries } from 'store/models';

const countryRequest = (url: string) => ({
  type: types.GET_COUNTRIES[types.REQUEST],
  url,
});

const countrySuccess = (countries: countries) => ({
  type: types.GET_COUNTRIES[types.SUCCESS],
  // payload: countries [],
});

const countryfailure = (err: Error) => ({
  type: types.GET_COUNTRIES[types.FAILURE],
  err: err.message,
});

interface countryRequestAction {
  type: typeof types.GET_COUNTRIES["REQUEST"];
  url: string;
}

interface countrySuccessAction {
  type: typeof types.GET_COUNTRIES["SUCCESS"];
  // payload: countries;
}

export default {
  countryRequest,
  countrySuccess,
  countryfailure,
}
