import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../styles/FlatListStyles';
import {convertMeterToKm} from '../utils/convertFromMeterToKm';

export default function FlatListData({route}) {
  const {weatherData} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.currentExtraWeatherViewStyles}>
        <View style={styles.currentWeatherSubViewStyles}>
          <Text style={styles.normalFont}>Temperature</Text>
          <Text style={styles.normalFont}>
            {weatherData?.main?.temp || 'N/A'}°
          </Text>
        </View>
        <View style={styles.currentWeatherSubViewStyles}>
          <Text style={styles.normalFont}>Will feel like</Text>
          <Text style={styles.normalFont}>
            {weatherData?.main?.feels_like || 'N/A'}°
          </Text>
        </View>
        <View style={styles.currentWeatherSubViewStyles}>
          <Text style={styles.normalFont}>Low</Text>
          <Text style={styles.normalFont}>
            {weatherData?.main?.temp_min || 'N/A'}°
          </Text>
        </View>
        <View style={styles.currentWeatherSubViewStyles}>
          <Text style={styles.normalFont}>High</Text>
          <Text style={styles.normalFont}>
            {weatherData?.main?.temp_max || 'N/A'}°
          </Text>
        </View>
        <View style={styles.currentWeatherSubViewStyles}>
          <Text style={styles.normalFont}>Humidity</Text>
          <Text style={styles.normalFont}>
            {weatherData?.main?.humidity || 'N/A'}%
          </Text>
        </View>
        <View style={styles.currentWeatherSubViewStyles}>
          <Text style={styles.normalFont}>Ground level</Text>
          <Text style={styles.normalFont}>
            {weatherData?.main?.grnd_level || 'N/A'} m
          </Text>
        </View>
        <View style={styles.currentWeatherSubViewStyles}>
          <Text style={styles.normalFont}>Sea level</Text>
          <Text style={styles.normalFont}>
            {weatherData?.main?.sea_level || 'N/A'} m
          </Text>
        </View>
        <View style={styles.currentWeatherSubViewStyles}>
          <Text style={styles.normalFont}>Gust</Text>
          <Text style={styles.normalFont}>
            {weatherData?.wind?.gust || 'N/A'} m/s
          </Text>
        </View>
        <View style={styles.currentWeatherSubViewStyles}>
          <Text style={styles.normalFont}>Wind deg</Text>
          <Text style={styles.normalFont}>
            {weatherData?.wind?.deg || 'N/A'}
          </Text>
        </View>
        <View style={styles.currentWeatherSubViewStyles}>
          <Text style={styles.normalFont}>Wind speed</Text>
          <Text style={styles.normalFont}>
            {weatherData?.wind?.speed || 'N/A'} mph
          </Text>
        </View>
        <View style={styles.currentWeatherSubViewStyles}>
          <Text style={styles.normalFont}>Visibility</Text>
          <Text style={styles.normalFont}>
            {convertMeterToKm(weatherData?.visibility) || 'N/A'} Km
          </Text>
        </View>
        <View style={styles.currentWeatherSubViewStyles}>
          <Text style={styles.normalFont}>Description</Text>
          <Text style={styles.normalFont}>
            {weatherData?.weather[0]?.description || 'N/A'}
          </Text>
        </View>
      </View>
    </View>
  );
}
