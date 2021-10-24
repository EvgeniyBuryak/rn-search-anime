import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { getArrayAnime } from './src/api/anime.api';

const App = () => {
  const [results, setResults] = useState('');

  //console.log(results);

  const keyExtractor = useCallback((item)=>item.id.toString(), []);

  const renderItem = useCallback(({ item }) =>(
    <View>
      <Text> 
        {item.attributes.titles.en}
      </Text>
      <Image source={{ uri: item.attributes.titles.en}} />
    </View>
  ), []);

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
  }, []);

  return (
    <View style={styles.container}>
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