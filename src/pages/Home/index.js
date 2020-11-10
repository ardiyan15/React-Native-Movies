import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Cards from '../../components/Cards'

const Home = ({ navigation }) => {
    const [value, onChangeText] = useState('e.g Avengers')

    let handleTextInput = (e) => {
        onChangeText(e.target.value)
    }

    let getData = () => {
        console.log(value)
    }

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Text style={styles.title}> Search Movie </Text>
                <TextInput
                    style={styles.inputSearch}
                    onChangeText={text => onChangeText(text)}
                    onFocus={handleTextInput}
                    value={value}
                    underlineColorAndroid="transparent"
                />
                <TouchableOpacity onPress={getData}>
                    <View style={styles.searchButton}>
                        <Text style={styles.searchText}> Search </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View>
                    <Cards onPress={navigation} />
                </View>
            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333',
    },
    searchContainer: {
        alignItems: 'center',
        paddingBottom: 10
    },
    title: {
        fontSize: 30,
        marginTop: 30,
        color: 'white'
    },
    inputSearch: {
        width: 300,
        height: 40,
        borderColor: '#d1cdcd',
        borderWidth: .7,
        borderRadius: 7,
        marginTop: 10,
        padding: 10,
        color: '#999797'
    },
    searchButton: {
        width: 70,
        marginTop: 10,
        backgroundColor: '#e3c905',
        padding: 8,
        borderRadius: 5,
        alignItems: 'center'
    },
    searchText: {
        color: 'white'
    }
})