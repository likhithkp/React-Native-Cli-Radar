import {ActivityIndicator, ScrollView, ToastAndroid, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from '../styles/HomeScreenStyles';
import {getWeather} from '../api/getCurrentWeather';
import {getThreeHourWeatherData} from '../api/getThreeHourWeather';
import MainHomeView from '../components/mainHomeView';
import {
  getCityCurrentWeather,
  getCityThreeHourWeather,
} from '../api/getCityWeather';

export default function HomeScreen({navigation, route}) {
  const {city} = route?.params ?? {};

  const [currentWeatherData, setCurrentWeatherData] = useState({});
  const [threeHourWeatherData, setThreeHourWeatherData] = useState([]);
  const [loadingThreeHourWeatherData, setLoadingThreeHourWeatherData] =
    useState(true);
  const [loadingCurrentWeatherData, setLoadingCurrentWeatherData] =
    useState(true);

  const getWeatherForLocation = async () => {
    try {
      if (city) {
        const cityWeather = await getCityCurrentWeather(city);
        const cityForecast = await getCityThreeHourWeather(city);
        if (cityWeather?.cod === 404) {
          ToastAndroid.show(
            `Unable to fetch weather for ${city}`,
            ToastAndroid.SHORT,
          );
          return;
        }
        setCurrentWeatherData(cityWeather);
        setThreeHourWeatherData(cityForecast);
        setLoadingCurrentWeatherData(false);
        setLoadingThreeHourWeatherData(false);
        ToastAndroid.show(`Weather fetched for ${city}`, ToastAndroid.SHORT);
        return;
      } else {
        const weatherData = await getWeather({lat: 19.076, lon: 72.8777});
        setCurrentWeatherData(weatherData);
        setLoadingCurrentWeatherData(false);
        const threeWeatherData = await getThreeHourWeatherData({
          lat: 19.076,
          lon: 72.8777,
        });
        setThreeHourWeatherData(threeWeatherData);
        setLoadingThreeHourWeatherData(false);
        ToastAndroid.show('Fetching... the weather', ToastAndroid.LONG);
        return;
      }
    } catch {
      ToastAndroid.show('Unable to fetch the weather', ToastAndroid.LONG);
    }
  };

  useEffect(() => {
    getWeatherForLocation();
  }, [city]);

  const {weather} = currentWeatherData;

  return (
    <View style={styles.container}>
      {loadingCurrentWeatherData && loadingThreeHourWeatherData ? (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <MainHomeView
            weather={weather}
            threeHourForecastData={threeHourWeatherData}
            currentWeatherForecastData={currentWeatherData}
            navigation={navigation}
          />
        </ScrollView>
      )}
    </View>
  );
}
