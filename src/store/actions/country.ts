import * as types from 'store/constants';
import { AjaxState } from 'store/models';

let request: string, success: string, failure: string;

request = types.GET_COUNTRIES[types.REQUEST];
success = types.GET_COUNTRIES[types.SUCCESS];
failure = types.GET_COUNTRIES[types.FAILURE];


const countryRequest = (url: string) => ({
  type: request,
  url,
});

const countrySuccess = (countries: AjaxState) => ({
  type: success,
  payload: countries,
});

const countryfailure = (err: Error) => ({
  type: failure,
  err: err.message,
});

interface countryRequestAction {
  type: typeof request;
  url: string;
}

interface countrySuccessAction {
  type: typeof success;
  payload: AjaxState;
}

interface countryFailureAction {
  type: typeof failure;
  err: string;
}

export type CountryActionTypes = countryRequestAction | countrySuccessAction | countryFailureAction;

export default {
  countryRequest,
  countrySuccess,
  countryfailure,
}