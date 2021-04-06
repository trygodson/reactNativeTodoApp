import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import About from '../screens/about'


const Stack = createStackNavigator();

export function AboutStack (){
    return(
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#f4511e',
                      },
                      headerTintColor: '#fff',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                      }    
                }}
                >
                <Stack.Screen name="About" component={About}
                options={
                  ({navigation})=>({
                    headerTitle: ()=> <Header navigation={navigation} title='About Me' />
                  })
                 }
                 />
            </Stack.Navigator>

    )
}

