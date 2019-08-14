/**
 * @format
 * @flow
 */
import React from "react";
import { View } from "react-native";
import Header from "./components/common/Header";

//for redux
// first import as redux is not only for react
import { Provider } from "react-redux"; //jsx component pass store to it a store (provider communcation glue react with the store)
import { createStore } from "redux";

//import reducers
import reducers from "./reducers"; // m4 fahem
import LiberaryList from "./components/LibraryList";

const App = () => {
  return (
    //take one child
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1 }}>
        <Header headerText={"Tech Stack"} />
        <LiberaryList />
      </View>
    </Provider>
  );
};

export default App;
