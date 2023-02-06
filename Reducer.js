export const initialState = {
  details: "",
};

function Reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "SHOW-DETAILS":
      return {
        details: [action.item],
      };

    default:
      return state;
  }
}

export default Reducer;
