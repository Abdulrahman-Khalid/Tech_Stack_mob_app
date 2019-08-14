import React, { Component } from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import CardSection from "./common/CardSection";
import { connect } from "react-redux";
import * as actions from "../actions"; //import all the actions and assign to var actions

class ListItem extends Component {
  renderDescription() {
    const { library, selectedLibraryId } = this.props;

    if (library.id === selectedLibraryId) {
      return <Text>{library.description}</Text>;
    }
  }

  onPressTouchable = () => {
    const { library, selectedLibraryId } = this.props;
    // console.log(this.props);
    if (library.id === selectedLibraryId) {
      return this.props.unselectLibrary();
    }
    return this.props.selectLibrary(library.id);
  };

  render() {
    console.log(this.props);
    const { titleStyle } = styles;
    const { title } = this.props.library;

    return (
      <TouchableWithoutFeedback onPress={this.onPressTouchable}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = state => {
  return { selectedLibraryId: state.selectedLibraryId };
};

export default connect(
  mapStateToProps,
  actions
)(ListItem);
// take this action creators and set it automaticly dispatched whenever it is called and take all the actions and passes to the component as props
//null is for no mapStateToProps
//connect helper is such as store.getState() in redux and it is used for calling an action creator or get a state from the store
