import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Card = (navigation) => {
    navigation = navigation.onPress
    return (
        <View>
            <Image source={{ uri: 'https://source.unsplash.com/random' }} style={styles.image} />
            <View style={styles.cardBackground}>
                <View style={styles.cardContent}>
                    <View style={styles.textCardContainer}>
                        <Text style={styles.title}> The Avengers </Text>
                        <Text style={styles.genre}> Action, Sci-Fi </Text>
                        <Text style={styles.director}> by: Christopher Nolan </Text>
                    </View>
                    <View style={styles.buttonCardContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('Detail', {
                            name: 'Ardiyan Agus'
                        })}>
                            <View style={styles.detailButton}>
                                <Text style={styles.detailText}> Detail </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Image source={{ uri: 'https://source.unsplash.com/random' }} style={styles.image} />
            <View style={styles.cardBackground}>
                <View style={styles.cardContent}>
                    <View style={styles.textCardContainer}>
                        <Text style={styles.title}> The Avengers </Text>
                        <Text style={styles.genre}> Action, Sci-Fi </Text>
                        <Text style={styles.director}> by: Christopher Nolan </Text>
                    </View>
                    <View style={styles.buttonCardContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
                            <View style={styles.detailButton}>
                                <Text style={styles.detailText}> Detail </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Image source={{ uri: 'https://source.unsplash.com/random' }} style={styles.image} />
            <View style={styles.cardBackground}>
                <View style={styles.cardContent}>
                    <View style={styles.textCardContainer}>
                        <Text style={styles.title}> The Avengers </Text>
                        <Text style={styles.genre}> Action, Sci-Fi </Text>
                        <Text style={styles.director}> by: Christopher Nolan </Text>
                    </View>
                    <View style={styles.buttonCardContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
                            <View style={styles.detailButton}>
                                <Text style={styles.detailText}> Detail </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View >
    )
}

export default Card

const styles = StyleSheet.create({
    cardContent: {
        right: -50
    },
    cardBackground: {
        flexDirection: 'row-reverse',
        backgroundColor: '#292929',
        alignSelf: 'stretch',
        zIndex: -1,
        marginTop: -100,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        height: 150,
    },
    image: {
        width: 120,
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
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 15,
        fontSize: 18
    },
    textCardContainer: {
        marginTop: 10,
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