export default (state = null, action) => {
  // null is defualt
  // console.log(action);
  switch (action.type) {
    case "select_library":
      return action.payload;
    case "unselect_library":
      return null;
    default:
      return state; //state returned last time
  }
  //   return null; // not undifined
  // state can't be returned as undifined so we make the null defualt because reducer called once the app is launched
};
