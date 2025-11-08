import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

type SearchBarProps = {
    value: string;
    onChange: (text: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
    return (
        <View style={styles.container}>
            <Ionicons name="search" size={22} color="#9c9797ff" style={styles.icon} />
            <TextInput
                placeholder="Search..."
                style={styles.input}
                value={value}
                onChangeText={onChange}
            />
        </View>
    );
};

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 10,
        marginHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 2,
        borderRadius: 25,
        borderColor: '#e9e4e4ff'

    },
    icon: {
        marginRight: 8,
        left: 15,

    },
    input: {
        backgroundColor: "#f2f2f2",
        fontSize: 16,
        left: 10
    },
});
