import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from '../styles/HomeScreenStyles';
import {formatTimestamp} from '../utils/convertTimeStamp';
import {convertMeterToKm} from '../utils/convertFromMeterToKm';
convertMeterToKm;
import {weatherImages} from '../utils/getImages';

export default function FlatListComponent({item}) {
  const {weather} = item;
  return (
    <View style={styles.weatherItem}>
      <Image
        source={weatherImages[weather[0]?.description]}
        style={styles.flatListWeatherImage}
      />
      <Text style={styles.flatListComponentTextStyles}>
        {formatTimestamp(item?.dt)}
      </Text>
      <Text style={styles.flatListComponentTextStyles}>
        Temperature: {Math.ceil(item.main.temp)}°
      </Text>
    </View>
  );
}
