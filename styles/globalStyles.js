import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    titleText:{
        fontFamily: 'Ilisarniq-Bold',
        fontSize: 20,
    },
    paragraphText:{
        fontFamily: "Ilisarniq-Regular",
        fontSize: 16,
        marginRight: 10,
    },
    input:{
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 5,
    }
})