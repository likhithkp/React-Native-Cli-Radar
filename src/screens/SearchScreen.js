import {View, Text, TextInput, ToastAndroid, Pressable} from 'react-native';
import React, {useCallback, useState, useRef, useEffect} from 'react';
import {styles} from '../styles/SearchScreenStyles';
import {debounce} from 'lodash';

export default function SearchScreen({navigation}) {
  const [cityList, setCityList] = useState([]);
  const textInputRef = useRef(null);

  useEffect(() => {
    textInputRef?.current?.focus();
  }, []);

  const getCityName = async city => {
    try {
      const result = await fetch(
        `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=r8RNZRc6aqdCrXCAMoiiQrJN7YYAgy8C&q=${city}`,
      );
      const data = await result.json();
      if (data.length >= 1) {
        setCityList(data);
      }
      return;
    } catch {
      ToastAndroid.show(
        'Unable to fetch cities. Please try again later.',
        ToastAndroid.SHORT,
      );
    }
  };

  const handleDebounce = useCallback(debounce(getCityName, 100), []);

  return (
    <View style={styles.container}>
      <View style={styles.searchStyles}>
        <TextInput
          style={styles.textInput}
          ref={textInputRef}
          placeholder="Search"
          onChangeText={handleDebounce}
          keyboardType="web-search"
        />
      </View>
      {cityList.map(city => (
        <View style={styles.resultCityView} key={city.Key}>
          <Pressable
            onPressIn={() =>
              navigation.navigate('Home', {city: city?.LocalizedName})
            }
            style={styles.cityListStyles}>
            <Text style={styles.cityFont}>{city?.LocalizedName}</Text>
            <Text style={styles.cityFont}>
              {city?.AdministrativeArea?.LocalizedName}
            </Text>
            <Text style={styles.cityFont}>{city?.Country?.LocalizedName}</Text>
          </Pressable>
        </View>
      ))}
    </View>
  );
}
