import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function HomeScreen({navigation}) {
  const [weatherData, setWeatherData] = useState({});

  const getWeather = async () => {
    const result = await fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=dubai&appid=550468296a28d84871905264a2d9da98&units=metric',
    );
    const data = await result.json();
    setWeatherData(data);
    console.log(data);
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <View style={styles.container}>
      <Text
        style={styles.searchIcon}
        onPress={() => navigation.navigate('Search')}>
        🔎
      </Text>
      <Text style={styles.temperature}>
        {Math.ceil(weatherData?.main?.temp)}℃
      </Text>
      <Text style={styles.cityName}>{weatherData?.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ADD8E6',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  temperature: {
    fontSize: 80,
  },
  cityName: {
    fontSize: 40,
  },
  searchIcon: {
    fontSize: 25,
  },
});
