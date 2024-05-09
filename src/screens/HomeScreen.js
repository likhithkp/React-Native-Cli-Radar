import {ActivityIndicator, ScrollView, ToastAndroid, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from '../styles/HomeScreenStyles';
import {getWeather} from '../api/getCurrentWeather';
import {getThreeHourWeatherData} from '../api/getThreeHourWeather';
import MainHomeView from '../components/mainHomeView';
import GetLocation from 'react-native-get-location';

export default function HomeScreen() {
  const [currentWeatherData, setCurrentWeatherData] = useState({});
  const [threeHourWeatherData, setThreeHourWeatherData] = useState([]);
  const [loadingThreeHourWeatherData, setLoadingThreeHourWeatherData] =
    useState(true);
  const [loadingCurrentWeatherData, setLoadingCurrentWeatherData] =
    useState(true);
  const [userLocation, setUserLocation] = useState({});

  const getUserLocation = async () => {
    try {
      const location = await GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
      });
      setUserLocation({lat: location.latitude, lon: location.longitude});
      return;
    } catch (error) {
      ToastAndroid.show(error, ToastAndroid.LONG);
    }
  };

  const getWeatherForLocation = async () => {
    try {
      if (!userLocation) {
        const weatherData = await getWeather({lat: 28.6139, lon: 77.2088});
        setCurrentWeatherData(weatherData);
        setLoadingCurrentWeatherData(false);
        const threeWeatherData = await getThreeHourWeatherData({
          lat: 28.6139,
          lon: 77.2088,
        });
        setThreeHourWeatherData(threeWeatherData);
        setLoadingThreeHourWeatherData(false);
        ToastAndroid.show(
          'Failed to fetch the weather for your location',
          ToastAndroid.LONG,
        );
        return;
      }

      if (Object.values(userLocation).length === 2) {
        const weatherData = await getWeather(userLocation);
        setCurrentWeatherData(weatherData);
        setLoadingCurrentWeatherData(false);

        const threeWeatherData = await getThreeHourWeatherData(userLocation);
        setThreeHourWeatherData(threeWeatherData);
        setLoadingThreeHourWeatherData(false);
        ToastAndroid.show('Fetching... weather', ToastAndroid.LONG);
        return;
      }
    } catch {
      ToastAndroid.show('Unable to fetch the weather', ToastAndroid.LONG);
    }
  };

  useEffect(() => {
    getUserLocation();
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
            threeHourWeatherData={threeHourWeatherData}
            currentWeatherData={currentWeatherData}
          />
        )}
      </ScrollView>
    </View>
  );
}
