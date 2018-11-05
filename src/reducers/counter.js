const initialState = {
  count: 0,
  numberClicked: 0
 
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        numberClicked: state.numberClicked + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
        numberClicked: state.numberClicked + 1 
      };
   
    case 'RESET':
      return {
        ...state,
        numberClicked: 0
      };

      case 'NEWCOUNT':
      return {
        ...state,
        count: action.setNewCount
      };



    default:
      return state;


  }
}

export default counterReducer;