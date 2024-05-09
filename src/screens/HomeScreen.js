import {ActivityIndicator, ScrollView, ToastAndroid, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from '../styles/HomeScreenStyles';
import {getWeather} from '../api/getCurrentWeather';
import {getThreeHourWeatherData} from '../api/getThreeHourWeather';
import MainHomeView from '../components/mainHomeView';

export default function HomeScreen() {
  const [currentWeatherData, setCurrentWeatherData] = useState({});
  const [threeHourWeatherData, setThreeHourWeatherData] = useState([]);
  const [loadingThreeHourWeatherData, setLoadingThreeHourWeatherData] =
    useState(true);
  const [loadingCurrentWeatherData, setLoadingCurrentWeatherData] =
    useState(true);

  const getCurrentWeather = async () => {
    try {
      const weatherData = await getWeather();
      setCurrentWeatherData(weatherData);
      setLoadingCurrentWeatherData(!loadingCurrentWeatherData);
      ToastAndroid.show('Fetching... weather', ToastAndroid.LONG);
      return;
    } catch {
      ToastAndroid.show('Unable to fetch the weather', ToastAndroid.LONG);
    }
  };

  const fetchThreeHourData = async () => {
    try {
      const threeWeatherData = await getThreeHourWeatherData();
      setThreeHourWeatherData(threeWeatherData);
      setLoadingThreeHourWeatherData(!loadingThreeHourWeatherData);
      ToastAndroid.show('Fetching... weather', ToastAndroid.LONG);
      return;
    } catch {
      ToastAndroid.show('Unable to fetch the forecast', ToastAndroid.LONG);
    }
  };

  useEffect(() => {
    getCurrentWeather();
    fetchThreeHourData();
  }, []);

  const {weather} = currentWeatherData;

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {loadingCurrentWeatherData || loadingThreeHourWeatherData ? (
          <ActivityIndicator size="large" color="#00ff00" />
        ) : (
          <MainHomeView
            weather={weather}
            threeHourWeatherData={threeHourWeatherData}
            currentWeatherData={currentWeatherData}
          />
        )}
      </ScrollView>
    </View>
  );
}
