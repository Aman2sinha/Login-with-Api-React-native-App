import { View, Text, Button, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { SliderBox } from "react-native-image-slider-box";

const DashboardScreen = ({ navigation }) => {
  const images = [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL4huni_W-N_400C4oEFND9SzV0Oi908VU0w&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZmflVwWVbFoJBGWaAvBTxvpLTaHmED0YXqw&usqp=CAU",
      "https://cdn.cliqueinc.com/posts/279832/zara-clothing-for-women-in-20s-279832-1557508686400-main.700x0c.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhTPux0xE3iVvzQY2MOnxNHYKaFBMIHFA2ZD-nowEZif4bTAOrhbySdPOXWSz4lWu35qg&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1nl1s4Uso_KW_vAGP0Mbg1EmJXegEsZUsvA&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmd5P3rxoyizjUBaUL6ouV0kdZ3yci0ork3Q&usqp=CAU",
  ];

  const imager = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1nl1s4Uso_KW_vAGP0Mbg1EmJXegEsZUsvA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZmflVwWVbFoJBGWaAvBTxvpLTaHmED0YXqw&usqp=CAU",
    "https://cdn.cliqueinc.com/posts/279832/zara-clothing-for-women-in-20s-279832-1557508686400-main.700x0c.jpg",
    "https://cdn.cliqueinc.com/posts/279832/zara-clothing-for-women-in-20s-279832-1557508686400-main.700x0c.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhTPux0xE3iVvzQY2MOnxNHYKaFBMIHFA2ZD-nowEZif4bTAOrhbySdPOXWSz4lWu35qg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmd5P3rxoyizjUBaUL6ouV0kdZ3yci0ork3Q&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL4huni_W-N_400C4oEFND9SzV0Oi908VU0w&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZmflVwWVbFoJBGWaAvBTxvpLTaHmED0YXqw&usqp=CAU",
    "https://cdn.cliqueinc.com/posts/279832/zara-clothing-for-women-in-20s-279832-1557508686400-main.700x0c.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhTPux0xE3iVvzQY2MOnxNHYKaFBMIHFA2ZD-nowEZif4bTAOrhbySdPOXWSz4lWu35qg&usqp=CAU",
  ];

  return (
    <View>
      <ScrollView>
        <View style={styles.Navcontainer}>
          <TouchableOpacity onPress={() => navigation.navigate("mobile")}  >
            <Image style={styles.menu} source={require('../assests/icons/mobile.png')} />
            <Text>Mobile</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("electronic")}>
            <Image style={styles.menu} source={require('../assests/icons/Electronic.png')} />
            <Text style={{ marginLeft: -8 }}>Electronic</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("cloths")}>
            <Image style={styles.menu} source={require('../assests/icons/Cloths.png')} />
            <Text>Cloths</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("mobile")}  >
            <Image style={styles.menu} source={require('../assests/icons/mobile.png')} />
            <Text style={{ marginLeft: -12 }}>New_Arrival</Text>
          </TouchableOpacity>


        </View>

        {/* SplashScreen */}
        <View style={styles.subcontainer}>
          <SliderBox autoplay="true" images={images} />
        </View>

        {/* image Container */}
        <View style={styles.subBorder}>

          <Image style={styles.nav} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyLXuvSDfH86_p2ca4ZfSKHyHxzon2rLxZeGG-RbaED7iVGRwu8fRhav0tWe1S2IjABNM&usqp=CAU' }} />
          <Image style={styles.nav} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5C59jVPBM6mu8Izis33BvNk6DXsZibKHa0g&usqp=CAU' }} />

        </View>

        <View>
          <Image style={styles.banner} source={{ uri: 'https://cdn.pixabay.com/photo/2017/11/29/13/28/a-discount-2986181_1280.jpg' }} />
        </View>

        <View style={styles.subcontainer}>
          <SliderBox autoplay="true" images={imager} />
        </View>
      </ScrollView>
    </View>
  )
}

export default DashboardScreen

const styles = StyleSheet.create({
  Navcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },

  menu: {
    borderRadius: 28,
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    width: 35,
    height: 36,
    flexDirection: 'row',

  },
  subcontainer: {
    width: '100%',
    height: '20%'
  },
  subBorder: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 10,


  },

  nav: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    width: 140,
    height: 120,
    margin: 5,
  },
  banner: {
    width: '100%',
    marginTop: 10,
    height: 100,
  },
});