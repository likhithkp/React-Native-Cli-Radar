import {ActivityIndicator, ScrollView, ToastAndroid, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from '../styles/HomeScreenStyles';
import {getWeather} from '../api/getCurrentWeather';
import {getThreeHourWeatherData} from '../api/getThreeHourWeather';
import MainHomeView from '../components/mainHomeView';

export default function HomeScreen({navigation}) {
  const [currentWeatherData, setCurrentWeatherData] = useState({});
  const [threeHourWeatherData, setThreeHourWeatherData] = useState([]);
  const [loadingThreeHourWeatherData, setLoadingThreeHourWeatherData] =
    useState(true);
  const [loadingCurrentWeatherData, setLoadingCurrentWeatherData] =
    useState(true);

  const getWeatherForLocation = async () => {
    try {
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
    } catch {
      ToastAndroid.show('Unable to fetch the weather', ToastAndroid.LONG);
    }
  };

  useEffect(() => {
    getWeatherForLocation();
  }, []);

  const {weather} = currentWeatherData;

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {loadingCurrentWeatherData && loadingThreeHourWeatherData ? (
          <ActivityIndicator size="large" color="#00ff00" />
        ) : (
          <MainHomeView
            weather={weather}
            threeHourForecastData={threeHourWeatherData}
            currentWeatherForecastData={currentWeatherData}
            navigation={navigation}
          />
        )}
      </ScrollView>
    </View>
  );
}
