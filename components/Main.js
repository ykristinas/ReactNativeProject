import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, FlatList, Image, Modal, SafeAreaView, Platform} from 'react-native';
import { gStyle } from '../styles/style';
import { AntDesign } from '@expo/vector-icons'; 
import Form from './Form';

export default function Main({navigation}) {

    const [news, setNews] = useState([
        {name: 'Google', anons:'Google!!!', full: 'Google is cool!', key: '1', img: 'https://i.pinimg.com/originals/ff/d9/b4/ffd9b46366e14141790a80d4922485bf.gif'},
        {name: 'Apple', anons:'Apple!!!', full: 'Apple is cool!', key: '2', img: 'https://i.pinimg.com/originals/63/2e/71/632e719e2a826db460d07908ecb076e9.gif'},
        {name: 'FaceBook', anons:'FaceBook!!!', full: 'FaceBook is cool!', key: '3', img: 'https://i.pinimg.com/originals/cf/d5/04/cfd5047e7452dcd3e05c07c3febc94e9.gif'},
    ]);

    const [modalWindow, setModalWindow] = useState(false);

    const addArticle = (article) => {
        setNews((list) => {
            article.key = Math.random().toString();
            return[
                article, 
                ...list
            ]
        });
        setModalWindow(false);
    }

    return (
      <View style={gStyle.main}>
        <Modal visible={modalWindow}>
            <View style={gStyle.main}>
                <AntDesign name="closecircleo" size={24} color="white" style={styles.iconClose} onPress={() => setModalWindow(false)}/>
                <Text style={styles.title}>Форма добавления статей</Text>
                <Form addArticle={addArticle}></Form>
            </View>
        </Modal>
        <AntDesign name="pluscircleo" size={34} color="white" onPress={() => setModalWindow(true)} />
        <Text style={[gStyle.title, styles.header]}>Главная страница</Text>
        <FlatList data={news} renderItem={({item}) => (
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('FullInfo', item)}>
                <Image style={styles.image} source={{
                    uri: item.img,
                }} />
                <Text style={[gStyle.list, styles.title]}>{item.name}</Text>
                <Text style={[gStyle.list, styles.subTitle]}>{item.anons}</Text>
            </TouchableOpacity>
        )} />
      </View>
    );
}
 
const styles = StyleSheet.create({
    header:{
        marginBottom: 30,
    },
    iconClose:{
        marginLeft: 20,
        textAlign: 'right',
    },
    item: {
        width: '100%',
        marginBottom: 30,
    },
    title: {
        fontSize: 22,
        marginTop: 20,
        color: '#474747',
    },
    subTitle:{
        fontSize: 16,
        fontFamily:'r-thin',
    },
    image:{
        width: '100%',
        height: 200,
    }
});