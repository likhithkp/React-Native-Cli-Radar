import {FlatList, ScrollView, Text, ToastAndroid, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from '../styles/HomeScreenStyles';
import CurrentWeatherDetails from '../components/currentWeatherDetails';
import {formatTimestamp} from '../utils/convertTimeStamp';
import FlatListComponent from '../components/flatListComponent';
import SearchView from '../components/searchView';
import {getWeather} from '../api/getCurrentWeather';
import {getThreeHourWeatherData} from '../api/getThreeHourWeather';

export default function HomeScreen() {
  const [currentWeatherData, setCurrentWeatherData] = useState({});
  const [threeHourWeatherData, setThreeHourWeatherData] = useState([]);

  const getCurrentWeather = async () => {
    try {
      const weatherData = await getWeather();
      setCurrentWeatherData(weatherData);
      return;
    } catch {
      ToastAndroid.show('Unable to fetch the weather', ToastAndroid.LONG);
    }
  };

  const fetchThreeHourData = async () => {
    try {
      const threeWeatherData = await getThreeHourWeatherData();
      setThreeHourWeatherData(threeWeatherData);
      return;
    } catch {
      ToastAndroid.show('Unable to fetch the forecast', ToastAndroid.LONG);
    }
  };

  useEffect(() => {
    getCurrentWeather();
    fetchThreeHourData();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.searchIconView}>
          <SearchView />
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
            renderItem={({item}) => <FlatListComponent item={item} />}
            showsVerticalScrollIndicator={false}
            keyExtractor={weatherInfo => weatherInfo?.dt?.toString()}
            horizontal
          />
        </View>
        <Text style={styles.normalFont}>Today's Details</Text>
        <CurrentWeatherDetails currentWeatherData={currentWeatherData} />
      </ScrollView>
    </View>
  );
}
