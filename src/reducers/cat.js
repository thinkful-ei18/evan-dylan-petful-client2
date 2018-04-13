const initialState = {
  data: null,
  error: null,
  loading: null
};

export default function reducer(state = initialState, action) {
  if (action.type === 'FETCH_CAT_REQUEST') {

  }
  else if (action.type === 'FETCH_CAT_SUCCESS') {

  }
  else if (action.type === 'FETCH_CAT_ERROR') {

  }
  else if (action.type === 'ADOPT_CAT_REQUEST') {

  }
  else if (action.type === 'ADOPT_CAT_SUCCESS') {

  }
  else if (action.type === 'ADOPT_CAT_ERROR') {

  }
  else {
    return state;
  }
}

