import React, {useState} from 'react';
import { View, Text, Modal, FlatList, TouchableOpacity, Keyboard, TouchableWithoutFeedback,  StyleSheet} from 'react-native';
import {globalStyles} from '../styles/globalStyles';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import ReviewForm from './reviewForm'
import Card from '../shared/card';

export function Home ({navigation}) {
    const [modal, setModal] = useState(false)
    const [review, setReview] = useState([
        {title: 'zelda, breadth of fresh air', ratings: 5, body: 'lorem ipsum', key: '2'},
        {title: 'maalus, made of fresh air', ratings: 4, body: 'lorem ipsum', key: '4'},
        {title: 'denzel, come alive of fresh air', ratings: 2, body: 'lorem ipsum', key: '6'},
    ])
    const openModal = ()=>{
        setModal(true)
    }
    const closeModal = ()=>{
        setModal(false)
    }
    const addReview = (reviewValues)=>{
        reviewValues.key = Math.random().toString()
        setReview((prevReviews)=>{
            return(
                [reviewValues, ...prevReviews]
            )
        })
        setModal(false)
    }
    return(
        
        <View style={globalStyles.container}>
            <Modal visible={modal} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContainer}>
                        <View style={{...styles.iconWrapper, ...styles.iconclose}}>
                            <Icon.Button name='close' size={23} color='black' iconStyle={styles.icon} backgroundColor='transparent' onPress={closeModal}></Icon.Button>
                        </View>
                        <ReviewForm addReview={addReview}/>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <View style={styles.iconWrapper}>
                <Icon.Button name='plus' size={22} color='black' iconStyle={styles.icon} backgroundColor='transparent' onPress={openModal}></Icon.Button>
            </View>
            <FlatList 
                data={review}
                renderItem={({item})=>(
                    <TouchableOpacity style={globalStyles.touchable} onPress={()=> navigation.navigate('Reviews', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    icon:{
        alignSelf: 'center',
        marginEnd: 0,
    },
    iconWrapper:{
        alignSelf: 'center',
        width: 38,
        height: 38,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ddd',
        padding: 0,
        paddingBottom: 0,
        marginBottom: 20,
    },
    iconclose:{
        marginTop: 45,
    },
    modalContainer:{
        flex: 1
    }
})
