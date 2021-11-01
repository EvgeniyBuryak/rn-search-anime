import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { getSingleAnime } from '../../api/single-anime.api';

const ResultsShowScreen = ({ navigation }) => {
    const [results, setResults] = useState();
    const id = navigation.getParam('id');

    const keyExtractor = useCallback( item =>{ item.id.toString() },[]);
    const renderItem = useCallback(({item})=>{
        return <Image style={styles.image} source={{ uri: item.attributes.posterImage.medium }} />

    }, []);

    const getResult = async (id) => {        
          const result = await getSingleAnime(id);
          setResults(result);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    return (
        <View>
            <Text>
                Results Show Screen
            </Text>
            <FlatList
                data={results}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 360,
        borderRadius: 4
    },
});

export default ResultsShowScreen;