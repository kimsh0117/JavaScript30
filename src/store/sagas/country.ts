import { all, fork, call, put, take } from 'redux-saga/effects';
import * as api from 'lib/api';
// import { getProducts } from 'store/actions';
import * as types from 'store/constants';

export function* fetchCountries(url: string) {
  try {
    // {data: {…}, status: 200, statusText: "OK", headers: {…}, config: {…}, …}
    const { data } = yield call(api.getCountries, url);
    // put 액션을 호출한다. 결국 dispatch를 호출한다.
    // yield put(getProducts.success(data));
  } catch (error) {
    // yield put(getProducts.failure(error));
  }
}

export function* watchFetchCountries() {
  while (true) {
    // {@@redux-saga/IO: true, combinator: false, type: "TAKE", payload: {…}}
    // 밑의 url은 /actions/product return 값과 연관되어 있다.
    const { url } = yield take(types.GET_COUNTRIES[types.REQUEST]);
    yield fork(fetchCountries, url);
  }
}

export default function*() {
  yield all([fork(watchFetchCountries)]);
}
