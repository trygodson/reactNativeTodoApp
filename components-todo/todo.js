import React, { useState} from 'react';
import { StyleSheet, Text, View, FlatList , ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Entypo';



export default function Todo({item, pressHandler}){
    return(
        <TouchableOpacity  onPress={()=> pressHandler(item.key)}>
            <View style={styles.todoItem}>
                <Icon name="trash" size={25} color="#900" />
                <Text style={styles.itemText}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    todoItem:{
        flex: 1,
        flexDirection: 'row',
        padding: 20,
        marginTop: 20,
        borderRadius: 10,
        borderWidth: 2,
        color: 'black',
        borderStyle: 'dashed',
        borderColor: 'black',
    },
    itemText:{
        marginLeft: 10,
    }
})