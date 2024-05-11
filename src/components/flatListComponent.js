import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {styles} from '../styles/HomeScreenStyles';
import {formatTimestamp} from '../utils/convertTimeStamp';
import {convertMeterToKm} from '../utils/convertFromMeterToKm';
convertMeterToKm;
import {weatherImages} from '../utils/getImages';

export default function FlatListComponent({item, navigation}) {
  const {weather} = item;
  return (
    <Pressable
      style={styles.weatherItem}
      onPress={() => navigation.navigate('FlatListData', {weatherData: item})}>
      <Image
        source={weatherImages[weather[0]?.description]}
        style={styles.flatListWeatherImage}
      />
      <Text style={styles.flatListComponentTempTextStyles}>
        {item?.main?.temp}°
      </Text>
      <Text style={styles.flatListComponentTextStyles}>
        {formatTimestamp(item?.dt)}
      </Text>
    </Pressable>
  );
}
