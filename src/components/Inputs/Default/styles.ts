import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  item: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginVertical: hp('1.2%'),
    width: wp('75%'),
    borderRadius: 10,
  },
  label: {
    color: '#ffffff',
    marginTop: hp('1%'),
    marginLeft: wp('1%'),
  },
  input: {
    color: '#ffffff',
    marginLeft: wp('1%'),
    marginTop: hp('0.2%'),
  },
});
