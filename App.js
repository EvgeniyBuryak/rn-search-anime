import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import animeApi from './src/api/anime.api';

const App = () => {
  const [results, setResults] = useState('');

  console.log(results);

  const getResults = async () => {
    try {      
      const response = await animeApi.get('?page[limit]=5');
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
        data={results.data}
        keyExtractor={(item)=>item.id.toString()}
        renderItem={({ item }) =>(
          <Text> 
            {item.attributes.slug}
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