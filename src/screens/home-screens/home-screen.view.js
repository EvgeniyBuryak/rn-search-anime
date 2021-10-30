import React, { useState, useEffect, useCallback, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { getArrayAnime } from '../../api/anime.api';
import Toast from 'react-native-easy-toast';
import ResultsDetail from './views/results-detail.view';

const App = ({ navigation }) => {
  const [results, setResults] = useState('');
  const toastRef = useRef(null);

  const keyExtractor = useCallback( item => item.id.toString(), []);
  const renderItem = useCallback( ({item}) => {
      return (
          <TouchableOpacity onPress={() => navigation.navigate('ResultsShow')}>
            <ResultsDetail result={item} />
          </TouchableOpacity>
      )}, []);

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
      <Toast ref={toastRef} 
        position='top'
      />
      <Text>Anime</Text>
      <FlatList
        data={results}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
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

export default App;