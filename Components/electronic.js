
import React, { useState } from 'react';
import { FlatList, ActivityIndicator, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { CARD_DATA_1, CARD_DATA_2 } from '../assests/data/Clothdata'

const electronic = ({ navigation }) => {
  const [data, setData] = useState(CARD_DATA_1);
  const [maxData, setMaxData] = useState(false);
  const [loading, setLoading] = useState(false);


  const concatData = () => {
    if (!maxData) {
      setLoading(true);
      setTimeout(() => {
        setData([...data, ...CARD_DATA_2]);
        setMaxData(true);
        setLoading(false);
      }, 2000);
    }
  };

  const renderLoading = () => {
    if (loading) {
      return (
        <ActivityIndicator
          size="large"
          color="grey"
          style={{ marginVertical: 10 }}
        />
      );
    }

    return null;
  };

  const Card = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("detailScreen", item)}  >
        <View style={styles.container}>
          <Image style={styles.img} source={{ uri: item.image }} />
          <Text style={styles.textdesign}>{item.title} </Text>
          <Text style={styles.buttontag}> {'\u20B9'} {item.price}  </Text>

        </View>
      </TouchableOpacity>
    );
  };

  return (

    <View>

      <FlatList
        data={data}
        renderItem={Card}
        onEndReached={concatData}
        onEndReachedThreshold={0.2}
        ListFooterComponent={renderLoading}
        keyExtractor={item => item}
      />
    </View>
  );
};

export default electronic;
const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: "row",
    borderWidth: 1,
    margin: 5,
    padding: 10,
    borderRadius: 10

  },
  menu: {
    borderRadius: 28,
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    width: 40,
    height: 40,
    flexDirection: 'row',

  },
  textdesign: {
    width: 180,
    height: 60,
    paddingBottom: 10,

  },
  img: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    width: 50,
    height: 50,
    margin: 4,

  },
  buttontag: {
    fontSize: 13,
    marginBottom: 20,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    width: 85,
    height: 35,
    padding: 10,
    color: 'white',
    backgroundColor: '#32CD32',
    fontWeight: 'bold',
    margin: 5,
    textAlign: "center",

  },

})