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
        fontSize: 28,
        fontWeight: '800',
        color: '#222',
        textAlign: 'center',
        marginBottom: 12,
    },
    subtitle: {
        fontSize: 17,
        fontWeight: '500',
        color: '#666',
        textAlign: 'center',
        lineHeight: 24,
        paddingHorizontal: 15,
    },
    button: {
        backgroundColor: '#ff6f61',
        paddingVertical: 16,
        borderRadius: 14,
        alignItems: 'center',

    },
    buttonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '700',
    },
    buttomContainer: {
        marginTop: 100,
        justifyContent: 'flex-end',
        width: '100%',
        paddingHorizontal: 30,
    }
});

export default styles

