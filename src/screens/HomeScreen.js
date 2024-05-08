import {
  FlatList,
  Pressable,
  ScrollView,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from '../styles/HomeScreenStyles';
import axios from 'axios';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import CurrentWeatherDetails from '../components/currentWeatherDetails';
import {formatTimestamp} from '../utils/convertTimeStamp';

export default function HomeScreen() {
  const [currentWeatherData, setCurrentWeatherData] = useState({});
  const [threeHourWeatherData, setThreeHourWeatherData] = useState([]);

  const getWeather = async () => {
    const result = await fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=madikeri&appid=13cffaf83ca230a33e17245b5aa557f8&units=metric',
    );
    const data = await result.json();
    if (data?.cod === 200) {
      ToastAndroid.show('Weather fetched', ToastAndroid.SHORT);
      setCurrentWeatherData(data);
      return;
    }
    if (data?.cod !== 200) {
      ToastAndroid.show('Unable to fetch the weather', ToastAndroid.SHORT);
      return;
    }
  };

  const getThreeHourWeatherData = async () => {
    await axios
      .get(
        'https://api.openweathermap.org/data/2.5/forecast?q=madikeri&appid=13cffaf83ca230a33e17245b5aa557f8&units=metric',
      )
      .then(response => setThreeHourWeatherData(response.data.list));
  };

  console.log('threeHourWeatherData', threeHourWeatherData[0]);

  useEffect(() => {
    getWeather();
    getThreeHourWeatherData();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.searchIconView}>
          <Pressable onPress={() => console.log('Pressed')}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={styles.searchIcon}
            />
          </Pressable>
        </View>
        {currentWeatherData && (
          <View style={styles.mainTemperatureView}>
            <Text style={styles.cityName}>{currentWeatherData?.name}</Text>
            <Text style={styles.dateAndTime}>
              {formatTimestamp(currentWeatherData?.dt)}
            </Text>
            <Text style={styles.weatherDescription}>
              {currentWeatherData?.weather?.description}
            </Text>
            <Text style={styles.temperature}>
              {Math.ceil(currentWeatherData?.main?.temp)}°
            </Text>
          </View>
        )}
        <View style={styles.higLowTempView}>
          <Text>H : {Math.ceil(currentWeatherData?.main?.temp_max)}°</Text>
          <Text>L : {Math.ceil(currentWeatherData?.main?.temp_min)}°</Text>
          <Text>
            Feels like : {Math.ceil(currentWeatherData?.main?.feels_like)}°
          </Text>
        </View>
        <View>
          <FlatList
            data={threeHourWeatherData}
            renderItem={({item}) => (
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
                  Visibility: {item.visibility}
                </Text>
              </View>
            )}
            showsVerticalScrollIndicator={false}
            keyExtractor={weatherInfo => weatherInfo?.dt?.toString()}
            horizontal
          />
        </View>
        <Text style={styles.normalFont}>Details</Text>
        <CurrentWeatherDetails currentWeatherData={currentWeatherData} />
      </ScrollView>
    </View>
  );
}
