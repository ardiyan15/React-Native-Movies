import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

const Card = (props) => {
    let navigation = props.onPress
    let movies = props.data
    return (
        movies.map(movie => (
            <View key={movie.imdbID}>
                <Image source={{ uri: movie.Poster }} style={styles.image} />
                <View style={styles.cardBackground}>
                    <View style={styles.cardContent}>
                        <View style={styles.textCardContainer}>
                            <Text style={styles.title} numberOfLines={1}> {movie.Title} </Text>
                            <Text style={styles.genre}> Action, Sci-Fi </Text>
                            <Text style={styles.director}> by: Christopher Nolan </Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('Detail', {
                                id: movie.imdbID,
                                image: movie.Poster,
                                title: movie.Title,
                                year: movie.Year
                            })}>
                                <View style={styles.detailButton}>
                                    <Text style={styles.detailText}> Detail </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View >
        ))
    )
}

export default Card

const styles = StyleSheet.create({
    cardContent: {
        width: wp('20%'),
        right: wp('-20%')
    },
    cardBackground: {
        flexDirection: 'row-reverse',
        backgroundColor: '#292929',
        alignSelf: 'stretch',
        zIndex: -1,
        marginTop: -100,
        marginLeft: wp('5%'),
        marginRight: wp('5%'),
        marginBottom: 20,
        height: 150,
    },
    image: {
        width: wp('30%'),
        height: 170,
        top: 30,
        marginLeft: 40
    },
    detailButton: {
        marginTop: 10,
        backgroundColor: '#e3c905',
        padding: 5,
        borderRadius: 9
    },
    detailText: {
        color: 'white',
        textAlign: 'center'
    },
    title: {
        fontSize: RFPercentage(5),
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 15,
        fontSize: 18,
        fontFamily: "Montserrat-Regular"
    },
    textCardContainer: {
        marginTop: '10%',
    },
    genre: {
        color: 'white'
    },
    director: {
        color: '#e3e3e3',
        fontWeight: '100',
        fontSize: 13
    },
})