import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  temperature: {
    fontSize: 90,
    color: 'white',
    fontWeight: '300',
  },
  cityName: {
    fontSize: 20,
    color: 'white',
  },
  dateAndTime: {
    marginTop: 10,
    fontSize: 15,
    color: 'white',
  },
  searchIcon: {
    margin: 10,
    color: 'white',
  },
  searchIconView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    margin: 10,
  },
  textInput: {
    padding: 10,
    borderWidth: 1,
    width: 280,
    margin: 12,
    borderRadius: 50,
  },
  mainTemperatureView: {
    alignItems: 'center',
    padding: 42,
  },
  mainTemperatureSecondView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  mainWeatherIconStyles: {height: 70, width: 70},
  flatListWeatherImage: {height: 50, width: 50},
  higLowTempView: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 7,
    marginBottom: 30,
  },
  weatherDescription: {
    fontSize: 20,
  },
  weatherItem: {
    height: 160,
    margin: 10,
    backgroundColor: '#3B3F44',
    borderRadius: 10,
    width: 140,
    padding: 10,
    gap: 10,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatListComponentTextStyles: {
    fontSize: 14,
    color: 'white',
  },
  currentWeatherViewStyles: {
    backgroundColor: '#3B3F44',
    alignItems: 'center',
    justifyContent: 'center',
    width: '92%',
    margin: 15,
    borderRadius: 10,
    height: 250,
    gap: 2,
  },
  currentExtraWeatherViewStyles: {
    backgroundColor: '#3B3F44',
    alignItems: 'center',
    justifyContent: 'center',
    width: '92%',
    margin: 15,
    borderRadius: 10,
    height: 180,
    gap: 2,
  },
  currentWeatherSubViewStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 8,
  },
  normalFont: {
    color: 'white',
    fontSize: 17,
    marginLeft: 10,
  },
  weatherDescription2: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginBottom: 10,
  },
  flatListHeaderStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
});
