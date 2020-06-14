import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  button: {
    marginLeft: wp('3%'),
    marginVertical: hp('1%'),
  },
});
