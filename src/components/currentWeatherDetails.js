import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../styles/HomeScreenStyles';
import {formatTimestamp} from '../utils/convertTimeStamp';

export default function CurrentWeatherDetails({currentWeatherData}) {
  return (
    <View style={styles.currentWeatherViewStyles}>
      <Text style={styles.normalFont}>
        Sunrise: {formatTimestamp(currentWeatherData?.sys?.sunrise)}
      </Text>
      <Text style={styles.normalFont}>
        Sunset: {formatTimestamp(currentWeatherData?.sys?.sunset)}
      </Text>
      <Text style={styles.normalFont}>
        Humidity: {currentWeatherData?.main?.humidity}
      </Text>
      <Text style={styles.normalFont}>
        Pressure: {currentWeatherData?.main?.pressure}
      </Text>
      <Text style={styles.normalFont}>
        Wind speed: {currentWeatherData?.wind?.speed}
      </Text>
    </View>
  );
}
