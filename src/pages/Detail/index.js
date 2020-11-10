import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const Detail = ({ route }) => {
    const { name } = route.params
    console.log(name)
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Text style={styles.titleDetail} > Title Movie </Text>
                <Image source={{ uri: 'https://source.unsplash.com/random' }} style={styles.imageDetail} />
            </View>
            <View style={styles.lineHorizontal} />
            <View style={styles.textContainer}>
                <Text> Title </Text>
                <Text> Rating </Text>
                <Text> Year </Text>
                <Text> Actor </Text>
                <Text> Rated </Text>
                <Text> Released </Text>
                <Text> Production </Text>
                <Text> Plot </Text>
            </View>
        </View >
    )
}

export default Detail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e1e8ed'
    },
    imageContainer: {
        alignItems: 'center'
    },
    imageDetail: {
        width: 200,
        height: 300,
        borderRadius: 5
    },
    titleDetail: {
        marginTop: 25,
        fontSize: 30,
        marginBottom: 10
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
        marginLeft: 10,
        marginTop: 20
    }
})