import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  temperature: {
    fontSize: 80,
    color: 'white',
    fontWeight: '300',
  },
  cityName: {
    fontSize: 20,
    color: 'white',
  },
  dateAndTime: {
    fontSize: 13,
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
  },
  higLowTempView: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  weatherDescription: {
    fontSize: 20,
  },
  weatherItem: {
    height: 200,
    margin: 10,
    backgroundColor: '#3B3F44',
    borderRadius: 10,
    width: 150,
    padding: 10,
    gap: 10,
  },
  flatListComponentTextStyles: {
    fontSize: 15,
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
});
