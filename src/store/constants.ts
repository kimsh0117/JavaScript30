export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

interface createRequestTypes {
  [key: string]: string;
}
function createRequestTypes(base: string): createRequestTypes {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc: createRequestTypes, type: string) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
}

// with I/O
export const GET_COUNTRIES = createRequestTypes('GET_COUNTRIES');