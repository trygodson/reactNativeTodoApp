import React from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {globalStyles} from '../styles/globalStyles'
import {Formik} from 'formik';
import * as yup from 'yup'

const ReviewSchema = yup.object({
    title: yup.string().required().min(4),
    body: yup.string().required().min(8),
    ratings: yup.string().test('is-num-1-5', 'Rating must be 1-5', (ratingsVal)=>{
        return parseInt(ratingsVal) > 0 && parseInt(ratingsVal) < 6
    })
})

export default function ReviewForm ({addReview}){
    return(
        <View style={globalStyles.container}>
            <Formik 
                initialValues={{title: '', body:'', ratings:''}}
                validationSchema={ReviewSchema}
                onSubmit={(values, actions)=>{
                    actions.resetForm()
                    addReview(values)
                }}
            >
                {(formikprops)=>(
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Review Title'
                            onChangeText={formikprops.handleChange('title')}
                            value={formikprops.values.title}
                        />
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Review Body'
                            onChangeText={formikprops.handleChange('body')}
                            value={formikprops.values.body}
                        />
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Ratings (1-5)'
                            onChangeText={formikprops.handleChange('ratings')}
                            value={formikprops.values.ratings}
                            keyboardType= 'numeric'
                        />
                        <Button title='submit' color='maroon' onPress={formikprops.handleSubmit}/>
                    </View>
                )}
            </Formik>
        </View>
    )
};