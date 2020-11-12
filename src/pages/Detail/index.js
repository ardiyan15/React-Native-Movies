import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, ActivityIndicator, Dimensions } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'


const width = Math.round(Dimensions.get('window').width)

const Detail = ({ route, navigation }) => {

    let id = route.params.id
    let image = route.params.image
    let title = route.params.title
    let year = route.params.year

    const [synopsis, setSynopsis] = useState('')
    const [genres, setGenres] = useState([])
    const [display, setDisplay] = useState(false)


    useEffect(() => {
        async function getDataMovie() {
            await fetch('http://www.omdbapi.com/?apikey=8240f7c5&i=' + id + '&plot=full')
                .then(response => response.json())
                .then(res => {
                    setSynopsis(res.Plot)
                    setGenres(res.Genre)
                    setDisplay(true)
                })
                .catch(error => console.log(error))
        }
        getDataMovie()
    })

    let GenreComponent = () => {
        let newGenres = genres.split(', ')
        return newGenres.map((newGenre, i) => {
            return <View key={i} style={styles.genreDetailContainer}>
                <Text> {newGenre} </Text>
            </View>
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: image }} style={styles.imageDetail} />
            </View>
            <View style={styles.textContainer}>
                {display ?
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.detailContent}>
                            <View style={styles.tilteDetail}>
                                <View style={styles.title}>
                                    <Text style={styles.textDetail}>{title}</Text>
                                    <Text style={styles.yearDetail}>({year})</Text>
                                </View>
                            </View>
                            <View style={styles.genreDetail}>
                                {GenreComponent()}
                            </View>
                            <View style={styles.synopsisDetail}>
                                <Text style={styles.synopsisTextDetail}> SYNOPSIS </Text>
                                <ScrollView>
                                    <View>
                                        <Text style={styles.synopsisContentDetail}>
                                            {synopsis}
                                        </Text>
                                    </View>
                                </ScrollView>
                            </View>
                        </View>
                    </ScrollView>
                    : <ActivityIndicator size="large" color="black" style={styles.activityIndicator} />}
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.buttonBackContainer}>
                    <View style={styles.buttonBack}>
                        <Text style={styles.textButton}> Back </Text>
                    </View>
                </TouchableOpacity>
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
        height: width * 1.3,
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
        fontSize: 25,
    },
    detailContent: {
        marginLeft: 25,
        marginRight: 25
    },
    tilteDetail: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    yearDetail: {
        color: '#cccccc',
        fontSize: 20,
        marginTop: 10
    },
    genreDetail: {
        flexDirection: 'row',
        marginLeft: -5,
        marginTop: 10
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
        width: 150,
        alignItems: 'center'
    },
    textButton: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17
    },
    buttonBackContainer: {
        paddingTop: '3%',
        paddingBottom: '20%',
        alignItems: 'center'
    },
    activityIndicator: {
        marginTop: 20
    }
})