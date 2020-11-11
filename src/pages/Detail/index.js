import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

const Detail = ({ route, navigation }) => {

    let id = route.params.id
    let image = route.params.image
    let title = route.params.title
    let year = route.params.year

    const [synopsis, setSynopsis] = useState('')

    useEffect(() => {
        fetch('http://www.omdbapi.com/?apikey=8240f7c5&i=' + id + '&plot=full', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(res => {
                setSynopsis(res.Plot)
                console.log(res)
            })
            .catch(error => console.log(error))
    })

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: image }} style={styles.imageDetail} />
            </View>
            <View style={styles.textContainer}>
                <View style={styles.detailContent}>
                    <View style={styles.tilteDetail}>
                        <Text style={styles.textDetail}> {title} </Text>
                        <Text style={styles.yearDetail}> ({year}) </Text>
                    </View>
                    <View style={styles.genreDetail}>
                        <View style={styles.genreDetailContainer}>
                            <Text> Action </Text>
                        </View>
                        <View style={styles.genreDetailContainer}>
                            <Text> Advanture </Text>
                        </View>
                        <View style={styles.genreDetailContainer}>
                            <Text> Sci-Fi </Text>
                        </View>
                    </View>
                    <View style={styles.synopsisDetail}>
                        <Text style={styles.synopsisTextDetail}> SYNOPSIS </Text>
                        <ScrollView>
                            <Text style={styles.synopsisContentDetail}>
                                {synopsis}
                            </Text>
                        </ScrollView>
                    </View>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={styles.buttonBack}>
                            <Text style={styles.textButton}> Back </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
}

export default Detail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333'
    },
    imageContainer: {
        alignItems: 'center',
    },
    imageDetail: {
        alignSelf: 'stretch',
        height: 500,
        borderRadius: 5
    },
    titleDetail: {
        marginTop: 25,
        fontSize: 30,
        marginBottom: 10,
        color: 'white'
    },
    lineHorizontal: {
        marginTop: 10,
        alignSelf: 'stretch',
        borderBottomColor: '#bbbdbf',
        borderWidth: .5,
        marginLeft: 10,
        marginRight: 10
    },
    textContainer: {
        backgroundColor: '#fcfcfc',
        borderTopRightRadius: 33,
        borderTopLeftRadius: 33,
        marginTop: -100,
        zIndex: 9,
        alignSelf: 'stretch',
        height: 400
    },
    textDetail: {
        color: 'black',
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 25
    },
    detailContent: {
        marginLeft: 25,
        marginRight: 25
    },
    tilteDetail: {
        flexDirection: 'row'
    },
    yearDetail: {
        marginTop: 33,
        color: '#cccccc',
        fontSize: 15
    },
    genreDetail: {
        flexDirection: 'row',
    },
    genreDetailContainer: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 2,
        borderRadius: 6,
        marginLeft: 8,
        marginTop: 10
    },
    synopsisDetail: {
        marginTop: 50,
    },
    synopsisTextDetail: {
        fontWeight: 'bold',
        fontSize: 30
    },
    synopsisContentDetail: {
        textAlign: 'justify',
        marginLeft: 8,
        color: '#cccccc'
    },
    buttonBack: {
        backgroundColor: '#ff5c5c',
        borderRadius: 7,
        padding: 5,
        alignItems: 'center'
    },
    textButton: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17
    }
})