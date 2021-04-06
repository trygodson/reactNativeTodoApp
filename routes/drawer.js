import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {AboutStack} from './aboutStack';
import {Homestack} from './homeStack';


const Drawer = createDrawerNavigator();


export default function MenuDrawer() {
    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name= 'Home' component={Homestack}/>
                <Drawer.Screen name= 'About' component={AboutStack}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
};