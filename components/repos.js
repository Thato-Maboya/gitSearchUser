//import liraries
import React, { Component, useEffect, useState, } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ResultsNotFound from './resultsNotFound';

// create a component
const Repos = ({ navigation, route }) => {
    const { repoURL } = route.params;
    const [repos, setRepos] = useState([])

    const loadRepos = () => {
        fetch(repoURL)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setRepos(data)
            })
            .catch((error) => {
                console.log(error);
            })
            .finally()
    }

    useEffect(() => {
        loadRepos()
    }, [])

    return (
        <View>
            {
                repos.length ?
                    <View>
                        {
                            repos.map(repo => [
                                <View>
                                <View key={repo.id} style={styles.RepoInfo}>
                                    <View>
                                        <Text>Name : {repo.name}</Text>
                                        
                                    </View>
                                    <View>
                                        <Text>Type : {repo.visibility}</Text>
                                    </View>
                                </View>
                                <Text style={styles.ReposDesc}>Desc : {repo.description}</Text>
                                </View>
                            ])
                        }
                    </View>
                    :
                    <ResultsNotFound />
            }
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    RepoInfo: {
        flexDirection: 'row',
        backgroundColor: '#c59d5f',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginBottom: 10,
        margin: 10,
        borderRadius: 10,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 10 }
    },
    ReposDesc: {
        flexDirection: 'row',
        backgroundColor: 'hsl(210, 36%, 96%)',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        margin: 10,
        flexWrap: 'wrap',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 }
    },
});

//make this component available to the app
export default Repos;
