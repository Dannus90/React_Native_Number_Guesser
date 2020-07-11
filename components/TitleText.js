import React from 'react';
import {Text, StyleSheet, Platform} from 'react-native';

const TitleText = props => (
  <Text style={{...styles.title, ...props.style}}>{props.children}</Text>
);

const styles = StyleSheet.create({
  title: {
    fontFamily: Platform.OS === 'ios' ? 'open-sans-bold' : 'OpenSans-Bold',
    fontSize: 18,
  },
});

export default TitleText;
