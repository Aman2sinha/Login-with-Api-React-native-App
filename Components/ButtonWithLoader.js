import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import React,{Component  } from 'react'

const ButtonWithLoader = ({ 
    text,
    onPress
}) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
          
      </TouchableOpacity>
    </View>
  )
}

export default ButtonWithLoader

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#0066ff',
        borderWidth:1,
        borderColor:'#fff',
        borderRadius:5,
        padding:10,
        margin:20,
        width:300,
        height:50,
       justifyContent:'center',
    },
    text: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        fontWeight:'bold',
        textTransform:'uppercase',



    }

})