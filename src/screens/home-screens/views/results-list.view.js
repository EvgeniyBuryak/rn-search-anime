import React, { useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from './results-detail.view';

const ResultsList = ({ results, navigation }) => {

    const keyExtractor = useCallback( item => item.id.toString(), []);
    const renderItem = useCallback( ({item}) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
              <ResultsDetail result={item} />
            </TouchableOpacity>
        )}, []);

    return (
        <View>
          <FlatList
            horizontal={true}
            showsVerticalScrollIndicator={false}
            data={results}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
          />
        </View>
    );
};

export default withNavigation(ResultsList);