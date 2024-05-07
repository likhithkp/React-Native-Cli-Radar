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

export default function HomeScreen() {
  const [weatherData, setWeatherData] = useState({});
  const [showSearchBox, setShowSearchBox] = useState(false);

  const getWeather = async () => {
    const result = await fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=dubai&appid=550468296a28d84871905264a2d9da98&units=metric',
    );
    const data = await result.json();
    if (data?.cod === 200) {
      ToastAndroid.show('Weather fetched', ToastAndroid.SHORT);
      setWeatherData(data);
      return;
    }
    if (data?.cod !== 200) {
      ToastAndroid.show('Unable to fetch the weather', ToastAndroid.SHORT);
      return;
    }
  };
  console.log('weatherData', weatherData);

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <ImageBackground
      // source={require('../assets/snow.jpg')}
      source={require('../assets/bg-sunny.jpg')}
      // source={require('../assets/bg-sunny2.jpg')}
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
        {weatherData && (
          <View style={styles.mainTemperatureView}>
            <Text style={styles.temperature}>
              {Math.ceil(weatherData?.main?.temp)}°
            </Text>
            <Text style={styles.cityName}>{weatherData?.name}</Text>
            <Text style={{fontSize: 20}}>
              {weatherData?.weather?.description}
            </Text>
          </View>
        )}
        <View style={styles.higLowTempView}>
          <Text>H : {Math.ceil(weatherData?.main?.temp_max)}°</Text>
          <Text>L : {Math.ceil(weatherData?.main?.temp_min)}°</Text>
        </View>
        <View>
          <FlatList />
        </View>
      </View>
    </ImageBackground>
  );
}
