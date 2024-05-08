import {Pressable} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {styles} from '../styles/HomeScreenStyles';

export default function SearchView() {
  return (
    <Pressable onPress={() => console.log('Pressed')}>
      <FontAwesomeIcon icon={faMagnifyingGlass} style={styles.searchIcon} />
    </Pressable>
  );
}
