/**
 * @format
 * @flow
 */
import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = ({ func, children }) => {
  const { textStyle, buttonStyle } = styles;

  return (
    <TouchableOpacity onPress={func} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: "center",
    color: "#007aff",
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 10,
    paddingTop: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#007aff",
    marginLeft: 5,
    marginRight: 5
  }
};

export default Button;
