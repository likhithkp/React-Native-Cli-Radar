import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../styles/HomeScreenStyles';
import {formatTimestamp} from '../utils/convertTimeStamp';
import {convertMeterToKm} from '../utils/convertFromMeterToKm';
convertMeterToKm;

export default function FlatListComponent({item}) {
  return (
    <View style={styles.weatherItem}>
      <Text style={styles.flatListComponentTextStyles}>
        {formatTimestamp(item?.dt)}
      </Text>
      <Text style={styles.flatListComponentTextStyles}>
        Temperature: {Math.ceil(item.main.temp)}°
      </Text>
      <Text style={styles.flatListComponentTextStyles}>
        L : {Math.ceil(item.main.temp_min)}° H : {''}
        {Math.ceil(item.main.temp_max)}°
      </Text>
      <Text style={styles.flatListComponentTextStyles}>
        Condition: {item.weather[0]?.main}
      </Text>
      <Text style={styles.flatListComponentTextStyles}>
        Humidity: {item.main?.humidity}
      </Text>
      <Text style={styles.flatListComponentTextStyles}>
        Visibility: {convertMeterToKm(item?.visibility)} Km
      </Text>
    </View>
  );
}
