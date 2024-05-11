import {
  View,
  Text,
  Image,
  FlatList,
  Pressable,
  ToastAndroid,
  PermissionsAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../styles/HomeScreenStyles';
import CurrentWeatherDetails from './currentWeatherDetails';
import FlatListComponent from './flatListComponent';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCalendarDays} from '@fortawesome/free-solid-svg-icons';
import {weatherImages} from '../utils/getImages';
import CurrentWeatherExtraDetails from './currentWeatherExtraDetails';
import {formatTimestamp} from '../utils/convertTimeStamp';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {faLocationCrosshairs} from '@fortawesome/free-solid-svg-icons';
import {getWeather} from '../api/getCurrentWeather';
import {getThreeHourWeatherData} from '../api/getThreeHourWeather';
import GetLocation from 'react-native-get-location';

export default function MainHomeView({
  weather,
  threeHourForecastData,
  currentWeatherForecastData,
  navigation,
}) {
  const [currentWeatherData, setCurrentWeatherData] = useState({});
  const [threeHourWeatherData, setThreeHourWeatherData] = useState([]);
  const [userLocation, setUserLocation] = useState({});
  const [showFetchedLocation, setShowFetchedLocation] = useState(false);

  const getLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location permission',
          message: 'Radar needs to access your location.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === 'granted') {
        getUserLocation();
        ToastAndroid.show('Location accessed', ToastAndroid.SHORT);
        return true;
      } else {
        ToastAndroid.show('Location accessed denied', ToastAndroid.SHORT);
        return false;
      }
    } catch (err) {
      ToastAndroid.show(err, ToastAndroid.SHORT);
      return false;
    }
  };

  const getUserLocation = async () => {
    try {
      const location = await GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
      });
      setUserLocation({lat: location.latitude, lon: location.longitude});
      if (Object.keys(userLocation)?.length === 2) {
        getWeatherForLocation();
        return;
      }
    } catch (error) {
      ToastAndroid.show(error, ToastAndroid.LONG);
    }
  };

  const getWeatherForLocation = async () => {
    try {
      if (Object.keys(userLocation)?.length === 2) {
        const weatherData = await getWeather(userLocation);
        setCurrentWeatherData(weatherData);
        const threeWeatherData = await getThreeHourWeatherData(userLocation);
        setThreeHourWeatherData(threeWeatherData);
        setShowFetchedLocation(!showFetchedLocation);
        ToastAndroid.show('Weather fetched successfully', ToastAndroid.LONG);
        return;
      }
    } catch {
      ToastAndroid.show('Unable to fetch the weather', ToastAndroid.LONG);
    }
  };

  return (
    <>
      <View style={styles.searchIconView}>
        <Pressable onPress={() => navigation.navigate('Search')}>
          <FontAwesomeIcon icon={faMagnifyingGlass} style={styles.searchIcon} />
        </Pressable>
        <Pressable onPress={() => getLocationPermission()}>
          <FontAwesomeIcon
            icon={faLocationCrosshairs}
            style={styles.searchIcon}
          />
        </Pressable>
      </View>
      <View style={styles.mainTemperatureView}>
        <View style={styles.mainTemperatureSecondView}>
          <Text style={styles.temperature}>
            {Math.ceil(
              currentWeatherData?.main?.temp ||
                currentWeatherForecastData?.main?.temp,
            )}
            °
          </Text>
          <Image
            source={
              currentWeatherData.weather
                ? weatherImages[currentWeatherData?.weather[0]?.description]
                : weatherImages[weather[0]?.description]
            }
            style={styles.mainWeatherIconStyles}
          />
        </View>
        <Text style={styles.cityName}>
          {currentWeatherData?.name || currentWeatherForecastData?.name}
        </Text>
        <Text style={styles.dateAndTime}>
          {formatTimestamp(
            currentWeatherData?.dt || currentWeatherForecastData?.dt,
          )}
        </Text>
        <View style={styles.higLowTempView}>
          <Text>
            H :
            {Math.ceil(
              currentWeatherData?.main?.temp_max ||
                currentWeatherForecastData?.main?.temp_max,
            )}
            °
          </Text>
          <Text>
            L :
            {Math.ceil(
              currentWeatherData?.main?.temp_min ||
                currentWeatherForecastData?.main?.temp_min,
            )}
            °
          </Text>
          <Text>
            Feels like {''}
            {Math.ceil(
              currentWeatherData?.main?.feels_like ||
                currentWeatherForecastData?.main?.feels_like,
            )}
            °
          </Text>
        </View>
      </View>
      <View>
        <View style={styles.flatListHeaderStyles}>
          <FontAwesomeIcon icon={faCalendarDays} style={styles.normalFont} />
          <Text style={styles.normalFont}>Next Five Days</Text>
        </View>
        <FlatList
          data={
            (showFetchedLocation && threeHourWeatherData) ||
            threeHourForecastData
          }
          renderItem={({item}) => <FlatListComponent item={item} />}
          showsHorizontalScrollIndicator={false}
          keyExtractor={weatherInfo => weatherInfo?.dt?.toString()}
          horizontal
        />
      </View>
      <>
        <View style={styles.flatListHeaderStyles}>
          <FontAwesomeIcon icon={faCalendarDays} style={styles.normalFont} />
          <Text style={styles.normalFont}>Today's Details</Text>
        </View>
        <CurrentWeatherDetails
          currentWeatherForecastData={currentWeatherForecastData}
          currentWeatherData={currentWeatherData}
        />
        <CurrentWeatherExtraDetails
          currentWeatherForecastData={currentWeatherForecastData}
          currentWeatherData={currentWeatherData}
        />
      </>
    </>
  );
}
