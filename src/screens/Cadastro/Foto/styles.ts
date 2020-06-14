import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
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
  View: {
    marginTop: hp('10%'),
    alignItems: 'center',
  },
  thumbnail: {
    height: hp('30%'),
    width: wp('53'),
  },

  bottomView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp('3%'),
    marginVertical: hp('10%'),
  },
  viewConfirmar: {
    marginTop: hp('1%'),
  },
});
