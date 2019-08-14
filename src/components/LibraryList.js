import React, { Component } from "react";
import { FlatList } from "react-native";
import { connect } from "react-redux";
import ListItem from "./ListItem";

class LiberaryList extends Component {
  renderItem(library) {
    return <ListItem library={library.item} />; //pass as a prop
  }

  render() {
    console.log(this.props.libraries);
    //performance is better than map every object as tag (map: every item = component (memory usage is high))
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={library => library.id.toString()}
      />
    );
  }
}

const mapStateToProps = state => {
  // state is the data in the store
  console.log(state);
  return { libraries: state.libraries }; //props = this returned object //Liberaries could be any name
};

export default connect(mapStateToProps)(LiberaryList); // 1- connect return func 2- the second function called with Liberary List
