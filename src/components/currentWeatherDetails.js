import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../styles/HomeScreenStyles';
import {formatTimestamp} from '../utils/convertTimeStamp';
import {convertMeterToKm} from '../utils/convertFromMeterToKm';

export default function CurrentWeatherDetails({currentWeatherData}) {
  return (
    <View style={styles.currentWeatherViewStyles}>
      <View style={styles.currentWeatherSubViewStyles}>
        <Text style={styles.normalFont}>Sunrise</Text>
        <Text style={styles.normalFont}>
          {formatTimestamp(currentWeatherData?.sys?.sunrise)}
        </Text>
      </View>
      <View style={styles.currentWeatherSubViewStyles}>
        <Text style={styles.normalFont}>Sunset</Text>
        <Text style={styles.normalFont}>
          {formatTimestamp(currentWeatherData?.sys?.sunset)}
        </Text>
      </View>
      <View style={styles.currentWeatherSubViewStyles}>
        <Text style={styles.normalFont}>Humidity</Text>
        <Text style={styles.normalFont}>
          {currentWeatherData?.main?.humidity}
        </Text>
      </View>
      <View style={styles.currentWeatherSubViewStyles}>
        <Text style={styles.normalFont}>Pressure</Text>
        <Text style={styles.normalFont}>
          {currentWeatherData?.main?.pressure}
        </Text>
      </View>
      <View style={styles.currentWeatherSubViewStyles}>
        <Text style={styles.normalFont}> Wind speed</Text>
        <Text style={styles.normalFont}>{currentWeatherData?.wind?.speed}</Text>
      </View>
      <View style={styles.currentWeatherSubViewStyles}>
        <Text style={styles.normalFont}> Visibility</Text>
        <Text style={styles.normalFont}>
          {convertMeterToKm(currentWeatherData?.visibility)} Km
        </Text>
      </View>
    </View>
  );
}
