import {
  FlatList,
  ImageBackground,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from '../styles/HomeScreenStyles';
import axios from 'axios';

export default function HomeScreen() {
  const [currentWeatherData, setCurrentWeatherData] = useState({});
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [threeHourWeatherData, setThreeHourWeatherData] = useState([]);

  const getWeather = async () => {
    const result = await fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=13cffaf83ca230a33e17245b5aa557f8&units=metric',
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
        'https://api.openweathermap.org/data/2.5/forecast?q=delhi&appid=13cffaf83ca230a33e17245b5aa557f8&units=metric',
      )
      .then(response => setThreeHourWeatherData(response.data.list));
  };

  console.log('threeHourWeatherData', threeHourWeatherData[0]);

  useEffect(() => {
    getWeather();
    getThreeHourWeatherData();
  }, []);

  return (
    <ImageBackground
      // source={require('../assets/snow.jpg')}
      source={require('../assets/bg-sunny2.jpg')}
      resizeMode="cover"
      // blurRadius={2}
      style={styles.container}>
      <View>
        <View style={styles.searchIconView}>
          {showSearchBox && (
            <TextInput style={styles.textInput} placeholder="Search city" />
          )}
          <Text
            style={styles.searchIcon}
            onPress={() => setShowSearchBox(!showSearchBox)}>
            🔎
          </Text>
        </View>
        {currentWeatherData && (
          <View style={styles.mainTemperatureView}>
            <Text style={styles.temperature}>
              {Math.ceil(currentWeatherData?.main?.temp)}°
            </Text>
            <Text style={styles.cityName}>{currentWeatherData?.name}</Text>
            <Text style={{fontSize: 20}}>
              {currentWeatherData?.weather?.description}
            </Text>
          </View>
        )}
        <View style={styles.higLowTempView}>
          <Text>H : {Math.ceil(currentWeatherData?.main?.temp_max)}°</Text>
          <Text>L : {Math.ceil(currentWeatherData?.main?.temp_min)}°</Text>
        </View>
        <View>
          <FlatList
            data={threeHourWeatherData}
            renderItem={({item}) => (
              <View style={styles.weatherItem}>
                <Text style={{color: 'black', fontSize: 20}}>
                  {item.dt_txt}
                </Text>
                <Text style={{color: 'black'}}>
                  Temperature: {Math.ceil(item.main.temp)}°C
                </Text>
                <Text style={{color: 'black'}}>
                  Description: {item.weather[0].description}
                </Text>
              </View>
            )}
            keyExtractor={weatherInfo => weatherInfo.dt.toString()}
            horizontal
          />
        </View>
      </View>
    </ImageBackground>
  );
}
