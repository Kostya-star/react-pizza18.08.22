const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cartReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_PIZZA_CART':
      return {
        ...state,
        items: {
          [action.payload.id]: [
            ...state.items[action.payload.id],
            action.payload
          ]
        }
      };
      break;

      // state = {
      // items: {
      //   0: [
      //     {1},
      //     {2},
      //     {5},
      //   ]
      // }}
    
    // case 'SET_TOTAL_PRICE':
    //   return {
    //     ...state,
    //     totalPrice: action.payload,
    //   }; 
    //   break;

  
    default: 
      return state
  }
}

export default cartReducer;