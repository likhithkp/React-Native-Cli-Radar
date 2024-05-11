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
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=ac4db0b006784d0854b9b8be0051879c`,
      );
      const data = await result.json();
      if (data.length >= 1) {
        setCityList(data);
        return;
      }
    } catch {
      ToastAndroid.show('Unable to find city', ToastAndroid.SHORT);
    }
  };

  const handleDebounce = useCallback(debounce(getCityName, 200), []);

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
        <View style={styles.resultCityView}>
          <Pressable
            key={city?.state}
            onPressIn={() => navigation.navigate('Home', {city: city?.name})}
            style={styles.cityListStyles}>
            <Text style={styles.cityFont}>{city?.name}</Text>
            <Text style={styles.cityFont}>{city?.state}</Text>
            <Text style={styles.cityFont}>{city?.country}</Text>
          </Pressable>
        </View>
      ))}
    </View>
  );
}
