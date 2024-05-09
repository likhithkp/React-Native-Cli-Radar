import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import {styles} from '../styles/HomeScreenStyles';
import SearchView from './searchView';
import CurrentWeatherDetails from './currentWeatherDetails';
import FlatListComponent from './flatListComponent';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCalendarDays} from '@fortawesome/free-solid-svg-icons';
import {weatherImages} from '../utils/getImages';
import CurrentWeatherExtraDetails from './currentWeatherExtraDetails';
import {formatTimestamp} from '../utils/convertTimeStamp';

export default function MainHomeView({
  currentWeatherData,
  threeHourWeatherData,
  weather,
}) {
  return (
    <>
      <View style={styles.searchIconView}>
        <SearchView />
      </View>
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
      <View>
        <View style={styles.flatListHeaderStyles}>
          <FontAwesomeIcon icon={faCalendarDays} style={styles.normalFont} />
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
      <>
        <View style={styles.flatListHeaderStyles}>
          <FontAwesomeIcon icon={faCalendarDays} style={styles.normalFont} />
          <Text style={styles.normalFont}>Today's Details</Text>
        </View>
        <CurrentWeatherDetails currentWeatherData={currentWeatherData} />
        <CurrentWeatherExtraDetails currentWeatherData={currentWeatherData} />
      </>
    </>
  );
}
