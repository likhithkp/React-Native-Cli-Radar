import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  temperature: {
    fontSize: 80,
  },
  cityName: {
    fontSize: 40,
  },
  searchIcon: {
    fontSize: 30,
    margin: 10,
  },
  searchIconView: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
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
});
