import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {Home} from '../screens/home';
import {ReviewDetails} from '../screens/reviewDetail'
import Header from '../shared/header'
import Icon from 'react-native-vector-icons/dist/Entypo';


const Stack = createStackNavigator();

export function Homestack (){
    return(
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#f4511e',
                        height: 60
                      },
                      headerTintColor: '#fff',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                      }    
                }}
                >
                <Stack.Screen name="Home" component={Home}
                options={
                   ({navigation})=>({
                     headerTitle: ()=> <Header navigation={navigation} title='Home Care' />,
                     headerLeft: ()=> (
                      <Icon.Button
                        name='menu'
                        size= {28}
                        color= 'white'
                        iconStyle={ {
                          marginRight: 0
                        }
                        }
                        backgroundColor = 'transparent'
                        onPress={()=> {navigation.openDrawer();}}
                        >
                      </Icon.Button>   
                     )
                   })
                  }
                />
                <Stack.Screen 
                name="Reviews" 
                component={ReviewDetails}
                options={  ({route})=>({title: route.params.title,
                    headerStyle: {
                        backgroundColor: 'blue',
                      }
                })}
                />
            </Stack.Navigator>

    )
}

