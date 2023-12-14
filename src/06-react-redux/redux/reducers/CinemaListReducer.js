const CinmeaListReducer = (
    prevState = {
      list: [],
    },
    action
  ) => {
    console.log(action);
    let newState = { ...prevState };
    switch (action.type) {
      case "change-list":
        newState.list = action.payload;
        return newState;
      default:
        return prevState;
    }
  };
  
  export default CinmeaListReducer
  