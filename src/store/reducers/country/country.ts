import { GET_COUNTRIES, REQUEST, SUCCESS, FAILURE } from 'store/constants';
import { AjaxState } from 'store/models';
import { CountryActionTypes } from 'store/actions/country';

const initialState: AjaxState = {
  country: [],
};

export default function(state = initialState, action: any): AjaxState {
  switch (action.type) {
    case GET_COUNTRIES[REQUEST]:
      return {
        ...initialState,
        country: state.country,
      };
    case GET_COUNTRIES[SUCCESS]:
      return {
        ...initialState,
        country: action.payload,
      };
    case GET_COUNTRIES[FAILURE]:
      return {
        ...initialState,
        err: 'error',
      };
    default:
      return state;
  }
}
