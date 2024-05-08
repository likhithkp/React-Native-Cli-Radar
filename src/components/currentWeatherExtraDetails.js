import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../styles/HomeScreenStyles';

export default function ({currentWeatherData}) {
  return (
    <View style={styles.currentExtraWeatherViewStyles}>
      <View style={styles.currentWeatherSubViewStyles}>
        <Text style={styles.normalFont}>Sea level</Text>
        <Text style={styles.normalFont}>
          {currentWeatherData?.main?.sea_level}
        </Text>
      </View>
      <View style={styles.currentWeatherSubViewStyles}>
        <Text style={styles.normalFont}>Ground level</Text>
        <Text style={styles.normalFont}>
          {currentWeatherData?.main?.grnd_level}
        </Text>
      </View>
      <View style={styles.currentWeatherSubViewStyles}>
        <Text style={styles.normalFont}>Wind deg</Text>
        <Text style={styles.normalFont}>{currentWeatherData?.wind?.deg}</Text>
      </View>
      <View style={styles.currentWeatherSubViewStyles}>
        <Text style={styles.normalFont}>Gust</Text>
        <Text style={styles.normalFont}>{currentWeatherData?.wind?.gust}</Text>
      </View>
    </View>
  );
}
