import React, { useState} from 'react';
import { StyleSheet, Text, View, FlatList , ScrollView, TouchableOpacity } from 'react-native';

export default function Header() {
    return(
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height: 80,
        paddingTop: 30,
        backgroundColor: 'coral'
    },
    title:{
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 20,
    }
})
