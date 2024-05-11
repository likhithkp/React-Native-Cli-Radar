import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
  },
  currentExtraWeatherViewStyles: {
    backgroundColor: '#3B3F44',
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(96),
    margin: hp(1),
    borderRadius: hp(1.5),
    gap: hp(0.5),
    padding: hp(1.2),
  },
  currentWeatherSubViewStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp(94),
    padding: hp(1.4),
  },
  normalFont: {
    color: 'white',
    fontSize: hp(2.5),
    marginLeft: wp(2),
  },
});
