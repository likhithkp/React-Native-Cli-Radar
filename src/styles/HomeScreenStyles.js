import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  temperature: {
    fontSize: hp(13),
    color: 'white',
    fontWeight: '300',
  },
  cityName: {
    fontSize: hp(3),
    color: 'white',
    marginTop: hp(1),
  },
  dateAndTime: {
    marginTop: hp(2),
    fontSize: hp(2.2),
    color: 'white',
  },
  searchIcon: {
    margin: hp(2),
    color: 'white',
  },
  searchIconView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    margin: hp(1.5),
  },
  // textInput: {
  //   padding: hp(10),
  //   borderWidth: 1,
  //   width: 280,
  //   margin: 12,
  //   borderRadius: 50,
  // },
  mainTemperatureView: {
    alignItems: 'center',
    padding: hp(5),
  },
  mainTemperatureSecondView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: hp(1),
  },
  mainWeatherIconStyles: {height: hp(17), width: wp(36)},
  flatListWeatherImage: {height: hp(10), width: wp(18)},
  higLowTempView: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: hp(1.5),
    marginBottom: hp(5),
  },
  weatherItem: {
    height: hp(23),
    margin: hp(1),
    backgroundColor: '#3B3F44',
    borderRadius: hp(2.3),
    width: wp(32),
    gap: hp(1),
    marginBottom: hp(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatListComponentTextStyles: {
    fontSize: hp(1.9),
    color: 'white',
  },
  flatListComponentTempTextStyles: {
    fontSize: hp(2.6),
    fontWeight: '500',
    color: 'white',
  },
  currentWeatherViewStyles: {
    backgroundColor: '#3B3F44',
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(96),
    margin: hp(1),
    borderRadius: hp(2.3),
    height: hp(40),
    gap: hp(0.5),
  },
  currentExtraWeatherViewStyles: {
    backgroundColor: '#3B3F44',
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(96),
    margin: hp(1),
    borderRadius: hp(2.3),
    height: hp(27),
    gap: hp(0.5),
  },
  currentWeatherSubViewStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp(94),
    padding: hp(1.1),
  },
  normalFont: {
    color: 'white',
    fontSize: hp(2.5),
    marginLeft: wp(2),
  },
  weatherDescription2: {
    display: 'flex',
    flexDirection: 'row',
    width: wp(100),
    justifyContent: 'center',
  },
  flatListHeaderStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: wp(1),
    marginBottom: hp(1),
  },
});
