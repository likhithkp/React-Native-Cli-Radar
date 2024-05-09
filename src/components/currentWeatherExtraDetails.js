import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../styles/HomeScreenStyles';

export default function ({currentWeatherForecastData, currentWeatherData}) {
  return (
    <View style={styles.currentExtraWeatherViewStyles}>
      <View style={styles.currentWeatherSubViewStyles}>
        <Text style={styles.normalFont}>Sea level</Text>
        <Text style={styles.normalFont}>
          {currentWeatherData?.main?.sea_level ||
            currentWeatherForecastData?.main?.sea_level ||
            'N/A'}
        </Text>
      </View>
      <View style={styles.currentWeatherSubViewStyles}>
        <Text style={styles.normalFont}>Ground level</Text>
        <Text style={styles.normalFont}>
          {currentWeatherData?.main?.grnd_level ||
            currentWeatherForecastData?.main?.grnd_level ||
            'N/A'}
        </Text>
      </View>
      <View style={styles.currentWeatherSubViewStyles}>
        <Text style={styles.normalFont}>Wind deg</Text>
        <Text style={styles.normalFont}>
          {currentWeatherData?.wind?.deg ||
            currentWeatherForecastData?.wind?.deg ||
            'N/A'}
        </Text>
      </View>
      <View style={styles.currentWeatherSubViewStyles}>
        <Text style={styles.normalFont}>Gust</Text>
        <Text style={styles.normalFont}>
          {currentWeatherForecastData?.wind?.gust ||
            currentWeatherForecastData?.wind?.gust ||
            'N/A'}
        </Text>
      </View>
    </View>
  );
}
