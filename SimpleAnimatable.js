import * as Animatable from "react-native-animatable";
import React from "react";

export default function SimpleAnimatable() {
  return (
    <Animatable.View
    style={{flex: 1, marginTop: '50%', marginLeft: '45%'}}
    >
      <Animatable.Text
        animation="bounce"
        iterationCount={"infinite"}
        direction="normal"
        style={{color: 'white', fontSize: 29}}
      >
        Loading..
      </Animatable.Text>
    </Animatable.View>
  );
}