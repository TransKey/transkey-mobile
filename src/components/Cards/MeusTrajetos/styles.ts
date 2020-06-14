import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  card: {
    borderColor: '#4e73df',
    width: wp('90%'),
  },

  cardItem: {
    backgroundColor: '#ffffff',
  },
  cardTitle: {
    color: '#4098e2',
    fontSize: 15,
  },
  cardBody: { marginLeft: wp('2%'), marginVertical: hp('2%') },
  cardText: {
    color: '#4098e2',
    fontSize: 15,
  },
  cardFooter: {
    justifyContent: 'center',
  },

  foooterText: {
    color: 'rgba(64, 152, 226, 0.8)',
    fontSize: 12,
  },
});
