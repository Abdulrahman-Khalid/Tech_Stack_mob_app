import React, { Component } from "react";
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
  UIManager
} from "react-native";
import CardSection from "./common/CardSection";
import { connect } from "react-redux";
import * as actions from "../actions"; //import all the actions and assign to var actions

class ListItem extends Component {
  componentDidUpdate() {
    // to enable animation if the platform is android
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>{library.description}</Text>
        </CardSection>
      );
    }
  }

  onPressTouchable = () => {
    const { library, expanded } = this.props;
    // console.log(this.props);
    if (expanded) {
      //if it is expanded and clicked the discription hides
      return this.props.unselectLibrary();
    }
    return this.props.selectLibrary(library.id);
  };

  render() {
    // console.log(this.props);
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

//when application state changes by calling action creator -> mapStateToProps rerun passing new props to the component which make component rerender
const mapStateToProps = (state, ownProps) => {
  console.log(state);
  // state is the store state, ownProps is the props of this component
  // return { selectedLibraryId: state.selectedLibraryId };
  const expanded = ownProps.library.id === state.selectedLibraryId;
  // added to the props of component (expanded only without a key because key is the same name as value it could be {expanded: expanded})
  return { expanded };
};

export default connect(
  mapStateToProps,
  actions
)(ListItem);
// take this action creators and set it automaticly dispatched whenever it is called and take all the actions and passes to the component as props
//null is for no mapStateToProps
//connect helper is such as store.getState() in redux and it is used for calling an action creator or get a state from the store
