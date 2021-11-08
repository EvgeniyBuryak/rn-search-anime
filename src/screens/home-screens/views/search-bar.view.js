import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder="Search"
                value={term}
                onChangeText={onTermChange}
                onSubmitEditing={onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#f0eeee',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10,
    },
    inputStyle: {
        //borderColor: 'black',
        //borderWidth: 1,
        flex: 1
    },
    iconStyle: {
        alignSelf: 'center',
        fontSize: 30,
        marginHorizontal: 15,
    }
});

export default SearchBar;