import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../styles/HomeScreenStyles';
import {formatTimestamp} from '../utils/convertTimeStamp';
import {convertMeterToKm} from '../utils/convertFromMeterToKm';

export default function CurrentWeatherDetails({
  currentWeatherForecastData,
  currentWeatherData,
}) {
  return (
    <View style={styles.currentWeatherViewStyles}>
      <View style={styles.currentWeatherSubViewStyles}>
        <Text style={styles.normalFont}>Sunrise</Text>
        <Text style={styles.normalFont}>
          {formatTimestamp(
            currentWeatherData?.sys?.sunrise ||
              currentWeatherForecastData?.sys?.sunrise,
          )}
        </Text>
      </View>
      <View style={styles.currentWeatherSubViewStyles}>
        <Text style={styles.normalFont}>Sunset</Text>
        <Text style={styles.normalFont}>
          {formatTimestamp(
            currentWeatherData?.sys?.sunset ||
              currentWeatherForecastData?.sys?.sunset,
          )}
        </Text>
      </View>
      <View style={styles.currentWeatherSubViewStyles}>
        <Text style={styles.normalFont}>Humidity</Text>
        <Text style={styles.normalFont}>
          {currentWeatherData?.main?.humidity ||
            currentWeatherForecastData?.main?.humidity}
        </Text>
      </View>
      <View style={styles.currentWeatherSubViewStyles}>
        <Text style={styles.normalFont}>Pressure</Text>
        <Text style={styles.normalFont}>
          {currentWeatherData?.main?.pressure ||
            currentWeatherForecastData?.main?.pressure}
        </Text>
      </View>
      <View style={styles.currentWeatherSubViewStyles}>
        <Text style={styles.normalFont}> Wind speed</Text>
        <Text style={styles.normalFont}>
          {currentWeatherData?.wind?.speed ||
            currentWeatherForecastData?.wind?.speed}
        </Text>
      </View>
      <View style={styles.currentWeatherSubViewStyles}>
        <Text style={styles.normalFont}> Visibility</Text>
        <Text style={styles.normalFont}>
          {convertMeterToKm(
            currentWeatherData?.visibility ||
              currentWeatherForecastData?.visibility,
          )}
          Km
        </Text>
      </View>
    </View>
  );
}
