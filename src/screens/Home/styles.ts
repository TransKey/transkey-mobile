import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  header: {
    backgroundColor: '#4098e2',
  },
  icon: {
    color: '#ffffff',
  },
  title: {
    color: '#ffffff',
    fontSize: 22,
  },
  viewMap: {
    height: hp('100%'),
    width: wp('100%'),
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  viewButton: {
    position: 'absolute',
    top: hp('70%'),
    alignSelf: 'center',
  },
});
