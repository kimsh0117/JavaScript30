import { all, fork, call, put, take } from 'redux-saga/effects';
import * as api from 'lib/api';
import { countryAction } from 'store/actions';
import * as types from 'store/constants';

export function* fetchCountries(url: string) {
  try {
    const { data } = yield call(api.getCountries, url);
    yield put(countryAction.countrySuccess(data));
  } catch (error) {
    yield put(countryAction.countryfailure(error));
  }
}

export function* watchFetchCountries() {
  while (true) {
    const { url } = yield take(types.GET_COUNTRIES[types.REQUEST]);
    yield fork(fetchCountries, url);
  }
}

export default function* () {
  yield all([fork(watchFetchCountries)]);
}
