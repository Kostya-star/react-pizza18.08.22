const initialState = {
  items: [],
  isLoaded: false,
};

const pizzasReducer = (state = initialState, action) => {

  switch (action.type) {

    case 'SET_PIZZAS':
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };
      break;

    case 'SET_LOADED':
      return {
        ...state,
        isLoaded: action.payload,
      };
      break;
  
    default: 
      return state
  }
}

export default pizzasReducer;