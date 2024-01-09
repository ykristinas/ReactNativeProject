import React, {useState} from 'react';
import { StyleSheet, View, Button, TextInput, TextInputBase} from 'react-native';
import { gStyle } from '../styles/style';
import { Formik } from 'formik';

export default function Form({addArticle}) {

  return (
    <View>
        <Formik initialValues={{name:'', anons:'', full:'', img:''}} onSubmit={(values, action) =>{
            console.log(values);
            addArticle(values);
            action.resetForm();
        }}>
            {(props) => (
                <View>
                    <TextInput placeholderTextColor={'#474747'}
                        style={styles.input}
                        color={'white'}
                        value={props.values.name}
                        placeholder='Введите название'
                        onChangeText={props.handleChange('name')}/>
                    <TextInput placeholderTextColor={'#474747'}
                        style={styles.input}
                        color={'white'}
                        value={props.values.anons}
                        multiline
                        placeholder='Введите анонс'
                        onChangeText={props.handleChange('anons')}/>
                    <TextInput placeholderTextColor={'#474747'}
                        style={styles.input}
                        color={'white'}
                        value={props.values.full}
                        multiline
                        placeholder='Введите статью'
                        onChangeText={props.handleChange('full')}/>
                    <TextInput placeholderTextColor={'#474747'}
                        style={styles.input}
                        color={'white'}
                        value={props.values.img}
                        placeholder='Укажите фото'
                        onChangeText={props.handleChange('img')}/>
                    <Button title='Добавить' onPress={props.handleSubmit}/>
                </View>
            )}
        </Formik>
    </View>
  );
}
const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        marginTop: 15,
        padding: 15,
        borderColor: 'silver',
        borderRadius: 10,
    }
});