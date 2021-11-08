import React, { useState, useEffect, useCallback, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { getArrayAnime } from '../../api/anime.api';
//import Toast from 'react-native-easy-toast';
import ResultsList from './views/results-list.view'
import SearchBar from './views/search-bar.view';

const HomeScreen = () => {
  const [results, setResults] = useState('');
  const [term, setTerm] = useState('');
  //const toastRef = useRef(null);

  /*const getResults = async (searchTerm) => {
    try {      
      const result = await getArrayAnime(searchTerm);

      setResults(result);

    } catch (err) {
      console.log("Something wrong");
    }
  };*/
  const getResults = (searchTerm) => {
    const response = new Promise((resolve, reject) => {
        const result = getArrayAnime(searchTerm);
        
        resolve(result);
        reject(new Error("Ошибка Home"));
    });

    response.then( res => setResults(res))
    .catch((err) => console.log(err));
  };
/*
  useEffect(()=>{

    //getResults(term);
    
    toastRef.current.show('Hello World!', 2000);
  }, [term]);
*/
//<Toast ref={toastRef} position='top' />
  return (
    <>
      <SearchBar
        term={term} 
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => getResults(term)}
      />
      <ResultsList results={results}/>
    </>
  );
};

const styles = StyleSheet.create({
  /*container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  }*/
});

export default HomeScreen;