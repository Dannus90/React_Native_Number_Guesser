import React from 'react';
import {Text, StyleSheet, Platform} from 'react-native';

const BodyText = props => (
  <Text style={{...styles.body, ...props.style}}>{props.children}</Text>
);

const styles = StyleSheet.create({
  body: {
    fontFamily: Platform.OS === 'ios' ? 'open-sans' : 'OpenSans-Regular',
  },
});

export default BodyText;
