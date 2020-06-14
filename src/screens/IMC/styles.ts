import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  header: {
    backgroundColor: '#4e73df',
  },
  bodyheader: {
    flex: 3,
  },
  title: {
    color: '#ffffff',
    fontSize: 22,
  },
  content: {
    backgroundColor: '#4098e2',
  },
  view: {
    marginTop: hp('10%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textPeso: {
    color: '#ffffff',
    fontSize: 17,
  },
  slider: {
    width: wp('80%'),
  },
  valuePeso: {
    color: '#ffffff',
    fontSize: 15,
  },
});
