import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FontAwesome, Ionicons } from '@expo/vector-icons';

import React from 'react'
import { useNavigation } from '@react-navigation/native';
type HeaderProps = {
    label: string
    onPressMenu: () => void
}
const Header: React.FC<HeaderProps> = ({ label, onPressMenu }) => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back-circle-sharp" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.textStyle}>{label}</Text>
            <TouchableOpacity onPress={onPressMenu}>
                <FontAwesome name="align-justify" size={24} color="black" />
            </TouchableOpacity>
        </View>

    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ee88a5ff",
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        gap: 80,
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'bold'
    }

})