export const selectLibrary = libraryId => {
  //export to export manything for different actions not export default
  //action creator (when it is called the returned action is dispatched to all reducers)
  return {
    type: "select_library",
    payload: libraryId
  };
};

//call action
// 1. determine where i will call this action creator
// 2. import connect in this component

export const unselectLibrary = () => {
  //export to export manything for different actions not export default
  //action creator (when it is called the returned action is dispatched to all reducers)
  return {
    type: "unselect_library"
  };
};
