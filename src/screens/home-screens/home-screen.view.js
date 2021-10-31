import React, { useState, useEffect, useCallback, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { getArrayAnime } from '../../api/anime.api';
import Toast from 'react-native-easy-toast';
import ResultsList from './views/results-list.view'

const HomeScreen = () => {
  const [results, setResults] = useState('');
  const toastRef = useRef(null);

  const getResults = async () => {
    try {      
      const result = await getArrayAnime();

      setResults(result);

    } catch (err) {
      console.log("Something wrong");
    }
  };

  useEffect(()=>{

    getResults();
    
    toastRef.current.show('Hello World!', 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Toast ref={toastRef} position='top' />
      <Text>Anime</Text>
      <ResultsList results={results}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  }
});

export default HomeScreen;