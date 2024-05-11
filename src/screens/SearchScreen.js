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
        `https://api.geoapify.com/v1/geocode/autocomplete?text=${city}&apiKey=7a190b6592bd4b1cb3646d96170e1d4d`,
      );
      const data = await result.json();
      setCityList(data?.features);
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
        <View style={styles.resultCityView} key={city?.properties?.place_id}>
          <Pressable
            onPressIn={() =>
              navigation.navigate('Home', {city: city?.properties?.city})
            }
            style={styles.cityListStyles}>
            <Text style={styles.cityFont}>{city?.properties?.formatted}</Text>
          </Pressable>
        </View>
      ))}
    </View>
  );
}
