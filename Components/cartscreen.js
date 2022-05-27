import { View, Text, StyleSheet, Image,Button  } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

const cartscreen = ({ route }) => {
    const item = route.params;
    const count=item+1;
    return (
        <View>
            <Text style={styles.title}>{item.title}</Text>
            <Image style={styles.img} source={{ uri: item.image }} />
            <Text style={styles.price}>{'\u20B9'} {item.price} </Text>
            <View style={{flexDirection: "row",}}>
            <Button  style={{width:20,height:10}} title="+" />
            <Text>  0 {"\n"}</Text>
            <Button style={{width:20,height:10}} title="-" />
            </View>
            <TouchableOpacity style={styles.btn} >
                <Text style={styles.textbtn}>Process for Payment   </Text>
            </TouchableOpacity>

        </View>
    )
}

export default cartscreen

const styles = StyleSheet.create({

    img: {
        width: '30%',
        height: 100,
        justifyContent: 'center',
        marginLeft: 17,
    },
    title: {

        fontSize: 18,
        margin: 15,
        color: 'black',
        fontWeight: 'bold',

    },
    price: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 15,
        color: 'black',

    },
    btn: {        
        width: '80%',
        height: 50,
        marginVertical: 300,
        borderWidth: 2,
        borderColor: 'green',
        backgroundColor: 'green',
        borderRadius: 20,
        marginLeft: '10%',

    },

    textbtn: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        justifyContent: 'center',
        margin: 5,
        marginLeft: '15%',
    },

})