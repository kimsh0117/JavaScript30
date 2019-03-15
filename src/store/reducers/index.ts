import { combineReducers } from 'redux';
import countryReducer from 'store/reducers/country';

export const rootReducer = combineReducers({
  ajax: countryReducer,
});

export type rootState = ReturnType<typeof rootReducer>;