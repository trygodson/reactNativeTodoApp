import React, { useState} from 'react';
import { StyleSheet, Text, View , TextInput, Button  } from 'react-native';


export default function AddTodo ({submitTodo}){
    const [text, setText] = useState('')
    const changeHandler = (val)=>{
        setText(val);
    }
    return(
        <View>
            <TextInput
            style={StyleSheet.input} 
            placeholder='Add todo...'
            onChangeText={changeHandler}
            />
            <Button title='Add Todo' onPress={()=> submitTodo(text)}/>
        </View>
    )
};


const styles = StyleSheet.create({
    input:{
        marginBottom: 30,
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }
})