import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  header: {
    backgroundColor: '#4e73df',
  },
  title: {
    color: '#ffffff',
    fontSize: 22,
  },
  content: {
    backgroundColor: '#4098e2',
  },
  viewContent: {
    alignItems: 'center',
  },
  thumbnail: {
    height: hp('20%'),
    width: wp('35%'),
    marginVertical: hp('5%'),
  },
  viewData: {
    marginVertical: hp('0.4%'),
    backgroundColor: '#4e73df',
    shadowColor: '#000000',
    alignItems: 'flex-start',
    height: hp('45%'),
    width: wp('90%'),
  },
  viewText: {
    marginTop: hp('5%'),
  },
  text: {
    marginVertical: hp('0.8%'),
    marginLeft: wp('5%'),
    color: '#ffffff',
    fontSize: 17,
  },
});
