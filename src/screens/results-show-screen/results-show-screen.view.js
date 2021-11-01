import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { getSingleAnime } from '../../api/single-anime.api';

const ResultsShowScreen = ({ navigation }) => {
    const [results, setResults] = useState();
    const id = navigation.getParam('id');

    const keyExtractor = useCallback( item =>{ item.id.toString() },[]);
    const renderItem = useCallback(({item})=>{
        return (
            <View style={styles.container}>
                <Text style={styles.name} > Title: { item.attributes.titles.en } </Text>
                <Text style={styles.name} > Episode count: { item.attributes.episodeCount } </Text>
                <Text style={styles.name} > Length minutes: { item.attributes.episodeLength } </Text>
                <Text style={styles.name} > Age rating: { item.attributes.ageRating } </Text>
                <Text style={styles.name} > Average rating: { item.attributes.averageRating } </Text>
                <Image style={styles.image} source={{ uri: item.attributes.posterImage.medium }} />
            </View>
        );

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
            <FlatList
                data={results}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        marginTop: 10
    },
    image: {
        width: 250,
        height: 360,
        borderRadius: 4
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
    }
});

export default ResultsShowScreen;