import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
  },
  searchStyles: {
    alignItems: 'center',
  },
  textInput: {
    height: hp(8),
    width: wp(90),
    marginTop: hp(2),
    borderWidth: 1,
    padding: wp(4),
    borderRadius: 50,
    backgroundColor: '#3B3F44',
  },
  resultCityView: {
    width: wp(100),
    borderBottomWidth: 0.3,
    borderBottomColor: '#3B3F44',
    padding: wp(4),
    borderRadius: 7,
    marginTop: hp(1),
  },
  cityFont: {
    fontSize: hp(2.7),
  },
  cityListStyles: {
    display: 'flex',
    flexDirection: 'row',
    gap: wp(3),
  },
});
