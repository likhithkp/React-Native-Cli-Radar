import {
  FlatList,
  Image,
  ScrollView,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from '../styles/HomeScreenStyles';
import CurrentWeatherDetails from '../components/currentWeatherDetails';
import FlatListComponent from '../components/flatListComponent';
import SearchView from '../components/searchView';
import {getWeather} from '../api/getCurrentWeather';
import {getThreeHourWeatherData} from '../api/getThreeHourWeather';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCalendarDays} from '@fortawesome/free-solid-svg-icons';
import {weatherImages} from '../utils/getImages';
import CurrentWeatherExtraDetails from '../components/currentWeatherExtraDetails';
import {formatTimestamp} from '../utils/convertTimeStamp';

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

  const {weather} = currentWeatherData;

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.searchIconView}>
          <SearchView />
        </View>
        {currentWeatherData && weather && (
          <>
            <View style={styles.mainTemperatureView}>
              <View style={styles.mainTemperatureSecondView}>
                <Text style={styles.temperature}>
                  {Math.ceil(currentWeatherData?.main?.temp)}°
                </Text>
                <Image
                  source={weatherImages[weather[0]?.description]}
                  style={styles.mainWeatherIconStyles}
                />
              </View>
              <Text style={styles.cityName}>{currentWeatherData?.name}</Text>
              <Text style={styles.dateAndTime}>
                {formatTimestamp(currentWeatherData?.dt)}
              </Text>
            </View>
            <View style={styles.higLowTempView}>
              <Text>H : {Math.ceil(currentWeatherData?.main?.temp_max)}°</Text>
              <Text>L : {Math.ceil(currentWeatherData?.main?.temp_min)}°</Text>
              <Text>
                Feels like {Math.ceil(currentWeatherData?.main?.feels_like)}°
              </Text>
            </View>
          </>
        )}
        {threeHourWeatherData && (
          <View>
            <View style={styles.flatListHeaderStyles}>
              <FontAwesomeIcon
                icon={faCalendarDays}
                style={styles.normalFont}
              />
              <Text style={styles.normalFont}>Next Five Days</Text>
            </View>
            <FlatList
              data={threeHourWeatherData}
              renderItem={({item}) => <FlatListComponent item={item} />}
              showsHorizontalScrollIndicator={false}
              keyExtractor={weatherInfo => weatherInfo?.dt?.toString()}
              horizontal
            />
          </View>
        )}
        {currentWeatherData && (
          <>
            <View style={styles.flatListHeaderStyles}>
              <FontAwesomeIcon
                icon={faCalendarDays}
                style={styles.normalFont}
              />
              <Text style={styles.normalFont}>Today's Details</Text>
            </View>
            <CurrentWeatherDetails currentWeatherData={currentWeatherData} />
            <CurrentWeatherExtraDetails
              currentWeatherData={currentWeatherData}
            />
          </>
        )}
      </ScrollView>
    </View>
  );
}
