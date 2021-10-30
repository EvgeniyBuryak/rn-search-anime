import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}> {result.attributes.titles.en} </Text>
            <Image style={styles.image} source={{ uri: result.attributes.posterImage.tiny}} />
            <Text> { result.attributes.averageRating } Stars, { result.attributes.ageRating } - Age Rating </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
    }
});

export default ResultsDetail;