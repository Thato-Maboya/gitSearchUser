//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

// create a component
const ResultsNotFound = () => {
    return (
        <View style={styles.container}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Results Not Found</Text>
            <Image style={styles.img} source={require('../assets/noResult.jpg')} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    img: {
        height: '50%',
        width: '90%',
        borderRadius: 10,
    },
});

//make this component available to the app
export default ResultsNotFound;
