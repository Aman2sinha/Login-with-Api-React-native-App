import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

import { useSelector } from 'react-redux';

const detailScreen = ({ navigation, route }) => {
    
    const token = useSelector(state => state.Reducers.authToken);

    const item = route.params;
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text style={styles.name} >{item.title} </Text>

                    <Image style={styles.img} source={{ uri: item.image }} />
                    <Text style={styles.title}>{item.title} </Text>
                    <Text style={{ color: 'black' }}>  Description:- </Text>
                    <Text style={styles.description}>{item.description} </Text>
                    <Text style={styles.price}>{'\u20B9'} {item.price} </Text>
                    <View style={styles.bottom}>

                </View>
                    
                    <View style={styles.bottom}>
                        <TouchableOpacity style={styles.bottombuy} onPress={() => { token === null ? navigation.navigate('Contact', { screen: 'Profile' }) : navigation.navigate("cartscreen", item) }} >
                            <Text style={styles.textbtn}>Add to Cart </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.bottombuy} onPress={() => { token === null ? navigation.navigate('Contact', { screen: 'Profile' }) : navigation.navigate("cartscreen", item) }} >
                            <Text style={styles.textbtn}>Buy</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default detailScreen

const styles = StyleSheet.create({
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        margin: 10,
    },
    img: {
        width: '90%',
        height: 300,
        justifyContent: 'center',
        marginLeft: 17,
    },
    title: {

        fontSize: 18,
        margin: 15,
        color: 'black',
        fontWeight: 'bold',

    },
    description: {
        fontSize: 15,
        margin: 10,
        color: 'black',

        color: 'black',
    },
    price: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 15,
        color: 'black',

    },
    Discription: {
        fontSize: 20,
        fontWeight: 10,
        marginLeft: 10,

    },
    bottom: {
        flexDirection: 'row',
        margin: 15,
        justifyContent: 'space-between',

    },
    bottombuy: {
        width: '48%',
        height: 50,
        borderWidth: 1,
        color: 'white',
        backgroundColor: 'green',
        fontWeight: 'bold',
        borderRadius: 10,
    },
    textbtn: {
        color: 'white',
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold',
        fontSize: 20,
    },
})