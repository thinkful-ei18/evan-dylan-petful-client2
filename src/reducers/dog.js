const initialState = {
  data: null,
  error: null,
  loading: null
};

export default function reducer(state = initialState, action) {
  if (action.type === 'FETCH_DOG_REQUEST') {
  } else if (action.type === 'FETCH_DOG_SUCCESS') {
  } else if (action.type === 'FETCH_DOG_ERROR') {
  } else if (action.type === 'ADOPT_DOG_REQUEST') {
  } else if (action.type === 'ADOPT_DOG_SUCCESS') {
  } else if (action.type === 'ADOPT_DOG_ERROR') {
  } else {
    return state;
  }
}
