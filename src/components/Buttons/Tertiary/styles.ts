import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  button: {
    backgroundColor: 'rgba(166, 166, 166, 0.6)',
    marginVertical: hp('1%'),
    borderRadius: 5,
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
  },
});
