import React, {useState} from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import { gStyle } from '../styles/style';

export default function Contact({route}) {
  //const loadScene = () => {
   // navigation.goBack();
  //}

  return (
    <View style={gStyle.main}>
      <Image style={styles.image} source={{
        uri: route.params.img,
      }} />
      <Text style={gStyle.title}>{route.params.name}</Text>
      <Text style={[gStyle.list, styles.full]}>{route.params.full}</Text>
    </View>
  );
}

//<Button title='Контакты' onPress={loadScene}/> В View
const styles = StyleSheet.create({
  full: {
    marginTop: 10,
    fontSize: 16,
    fontFamily:'r-thin',
  },
  image:{
    width: '100%',
    height: 200,
  }
});