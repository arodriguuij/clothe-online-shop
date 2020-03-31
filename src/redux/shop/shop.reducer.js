const initialState = {
  collections: null
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INITIALIZE_COLLECTION':
      return{
        ...state,
        collections: action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;
