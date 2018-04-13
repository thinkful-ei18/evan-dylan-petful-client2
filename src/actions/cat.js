import {API_BASE_URL} from '../config';
export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST';
export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';
export const ADOPT_CAT_REQUEST = 'ADOPT_CAT_REQUEST';
export const ADOPT_CAT_SUCCESS = 'ADOPT_CAT_SUCCESS';
export const ADOPT_CAT_ERROR = 'ADOPT_CAT_ERROR';

const fetchCatRequest = () => ({
  type: FETCH_CAT_REQUEST
});

const fetchCatSuccess = cat => ({
  type: FETCH_CAT_SUCCESS,
  cat
})

const fetchCatError = err => ({
  type: FETCH_CAT_ERROR,
  err
});

const adoptCatRequest = () => ({
  type: ADOPT_CAT_REQUEST
});

const adoptCatSuccess = () => ({
  type: ADOPT_CAT_SUCCESS,
});

const adoptCatError = err => ({
  type: ADOPT_CAT_ERROR,
  err
});

export const fetchCat = () => dispatch => {
  console.log('fetch cat was called');
  dispatch(fetchCatRequest());
  return (
    fetch(`${API_BASE_URL}/cat`, {
    method: 'GET'
    })
    .then(res => res.json())
    .then(({data}) => fetchCatSuccess(data))
    .catch(err => fetchCatError(err))
  );
}

export const adoptCat = () => dispatch => {
  dispatch(adoptCatRequest());
  return fetch(`${API_BASE_URL}/cat`, { method: 'DELETE' })
    .then(() => adoptCatSuccess())
    .then(fetchCat())
    .catch(err => adoptCatError(err));
}