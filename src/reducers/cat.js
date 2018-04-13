const initialState = {
  data: {
    imageURL:
      'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription:
      'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  },
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

