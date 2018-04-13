const initialState = {
  data: {
    imageURL:
      'https://s3.amazonaws.com/filestore.rescuegroups.org/6316/pictures/animals/12812/12812781/55770045_500x366.jpg',
    imageDescription: 'A dog being a dog: Amos',
    name: 'Amos',
    sex: 'Male',
    age: 2,
    breed: 'Schnauzer',
    story:
      'My name is AMOS (SRC#1945) and I am a un-neutered, male Standard Schnauzer . I was born in November, 2017  and I weigh approximately 25 - 28 pounds. I am micro-chipped, have all required vaccinations, have not yet been neutered and cannot be neutered until I am a minimum of one year old because of my growth plates. My breeder has me health tested.  '
  },
  error: null,
  loading: null
};

export default function reducer(state = initialState, action) {
  return state;
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
