import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
export default StyleSheet.create({
  container: {
    backgroundColor: '#4e73df',
  },
  viewHeader: {
    marginTop: hp('5%'),
    marginLeft: wp('5%'),
  },
  viewText: {
    marginTop: hp('3%'),
    marginLeft: wp('2%'),
  },
  text: {
    color: '#ffffff',
  },
  viewItems: {
    backgroundColor: '#4098e2',
    marginTop: hp('2%'),
    height: hp('100%'),
  },
  drawerItem: {
    color: '#ffffff',
    fontSize: wp('4%'),
  },
});
