import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import animeApi from './src/api/anime.api';

const App = () => {
  const [results, setResults] = useState('');

  const getResults = async () => {
    try {
      const response = await animeApi.get('?filter[categories]=future');
      setResults(response.data);
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
        keyExtractor={item=>item.id}
        renderItem={({ item }) =>(
          <Text> 
            {item.canonicalTitle}
          </Text>
        )}
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