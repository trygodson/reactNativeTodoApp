import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import {globalStyles} from '../styles/globalStyles'
import Card from '../shared/card'
export function ReviewDetails ({  navigation, route }) {
    return(
        <View style={globalStyles.container}>
            <Card>
                <Text>{route.params.title}</Text>
                <Text>{route.params.body}</Text>
                <Text>{route.params.ratings}</Text>
            </Card>
        </View>
    )
};

