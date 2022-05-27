import { StyleSheet, Text, View ,TextInput} from 'react-native'
import React from 'react'

const TextInputWithLabel = ({
    label,
    value,
    placeHolder,
    isSecure,
    onChangeText,
    ...props
}) => {
        
  return (
    <View>
        <Text style={{color:'black',marginBottom:8,marginTop:5,fontWeight:'bold',fontSize:16}}> {label}</Text>
     <TextInput
     value={value}
     placeholder={placeHolder}
    
        onChangeText={onChangeText}
        style={[styles.inputStyle]}
        placeholderTextColor="grey"
        secureTextEntry={isSecure} 
        {...props}
        />
    </View>
  )
}

export default TextInputWithLabel

const styles = StyleSheet.create({

    inputStyle: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        color:'black',
       

    }
})