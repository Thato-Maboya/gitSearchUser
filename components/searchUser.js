//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ResultsNotFound from './resultsNotFound';

// create a component
const searchUser = ({navigation }) => {


    const API_URL = "https://api.github.com/search/users?q="
    const [userName, setUserName] = useState()
    const [profiles, setProfiles] = useState([])
    const [count, setCount] = useState()

    const search = () => {
        fetch(API_URL + userName)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setProfiles(data.items)
                setCount(data.total_count)
            })
            .catch((error) => {
                console.log(error);
            })
            .finally()
    }



    return (
        <View style={styles.container}>
            <Image source={require('../assets/thato.jpg')} style={StyleSheet.absoluteFillObject} />
            <View style={styles.InlineRow}>
                <TextInput
                    style={styles.SearchInput}
                    placeholder='Enter User name'
                    autoCapitalize="none"
                    onChangeText={(e) => setUserName(e)}
                />
                <TouchableOpacity style={styles.SearchBtn} onPress={() => search()}>
                    <Text>Search</Text>
                </TouchableOpacity>
            </View>

            <View>
                {
                    profiles.length ?
                        <View>
                            <View style={styles.UserResultsCount}>
                                <Text style={{ fontSize: 20, fontWeight: 'Bold', }}>{count} Results Found</Text>
                            </View>
                            <View>

                            </View>
                            {
                                profiles.map(user => [
                                    <View key={user.id} style={styles.Users}>

                                        <View>
                                            <Text>
                                                {user.login}
                                            </Text>
                                            <TouchableOpacity style={styles.ReposBtn} onPress={() => navigation.navigate('repos', {repoURL: user.repos_url})}>
                                                <Text>View Repo</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View>
                                            <Image source={{ uri: user.avatar_url }} style={styles.LogoImg} />
                                        </View>
                                    </View>
                                ])
                            }
                        </View>
                        :
                        <ResultsNotFound />
                }
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'hsl(210, 36%, 96%)',
    },
    SearchInput: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 }
    },
    SearchBtn: {
        flexDirection: 'row',
        backgroundColor: '#c59d5f',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 }
    },
    ReposBtn: {
        flexDirection: 'row',
        backgroundColor: 'hsl(210, 36%, 96%)',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 }
    },
    Users: {
        flexDirection: 'row',
        backgroundColor: '#c59d5f',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginBottom: 10,
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 }
    },
    UserResultsCount: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        margin: 10,
        borderRadius: 10,
        shadowColor: 'lime',
        shadowOffset: { width: 0, height: 10 }
    },
    InlineRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // padding: 15,
    },
    LogoImg: {
        height: 40,
        width: 40,
        borderColor: 'green',
        borderRadius: 75,
        borderWidth: 2,
    },
});

//make this component available to the app
export default searchUser;
