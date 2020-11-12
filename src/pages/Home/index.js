import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


import Cards from '../../components/Cards'

const Home = ({ navigation }) => {
    const [value, onChangeText] = useState('e.g Avengers')
    const [existMovie, onDisplay] = useState('')
    const [dataMovie, setDataMovie] = useState()
    const [result, setResult] = useState('')

    let handleTextInput = (e) => {
        onChangeText(e.target.value)
    }

    let getData = () => {
        console.log('Tombol di click')
        fetch('http://www.omdbapi.com/?apikey=8240f7c5&s=' + value, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(res => {
                console.log(res)
                if (res.Response === 'True') {
                    setDataMovie(res.Search)
                    onDisplay(true)
                }
                if (res.Response === 'False') {
                    onDisplay(false)
                    setResult(res.Error)
                }
            })
            .catch(error => console.log(error))
    }

    function ExistContent() {
        return <Cards
            onPress={navigation}
            data={dataMovie}
        />
    }

    function NotExist() {
        return <Text style={styles.movieNotExist}> {result} </Text>
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
                    {existMovie ? <ExistContent /> : <NotExist />}
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
        fontSize: RFPercentage(5),
        marginTop: 30,
        color: 'white'
    },
    inputSearch: {
        width: wp('80%'),
        height: hp('7%'),
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
    },
    movieNotExist: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 20
    }
})