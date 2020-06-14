import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

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
  viewBottom: {
    marginTop: hp('2%'),
  },
});
