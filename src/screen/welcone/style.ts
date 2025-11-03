import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ee88a5ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    logo: {
        width: width * 0.4,
        height: width * 0.4,
        borderRadius: 100,
        marginBottom: 30,
        backgroundColor: 'white',
        resizeMode: 'cover'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        fontStyle: 'italic',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 40,
        paddingHorizontal: 12
    },
    button: {
        backgroundColor: 'white',
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonText: {
        color: '#ee88a5ff',
        fontWeight: 'bold',
        fontSize: 18,
    },
});

export default styles

