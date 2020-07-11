import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  bodyText: {
    fontFamily: Platform.OS === 'ios' ? 'open-sans-bold' : 'OpenSans-Bold',
  },
  title: {
    fontFamily: Platform.OS === 'ios' ? 'open-sans-bold' : 'OpenSans-Bold',
    fontSize: 18,
  },
});
