import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState, useMemo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../../component/searchBar/searchBar";
import DressList from "../../component/item/item";
import styles from "./style";

const DressScreen = () => {
    const [searchText, setSearchText] = useState("");

    const dresses = [
        { id: 1, title: "Red Dress", image: "https://picsum.photos/200/300", price: 29.99 },
        { id: 2, title: "Blue Dress", image: "https://picsum.photos/201/300", price: 39.99 },
        { id: 3, title: "Black Dress", image: "https://picsum.photos/202/300", price: 49.99 },
        { id: 4, title: "Yellow Dress", image: "https://picsum.photos/203/300", price: 35.99 },
        { id: 5, title: "Red Dress", image: "https://picsum.photos/200/300", price: 29.99 },
        { id: 6, title: "Blue Dress", image: "https://picsum.photos/201/300", price: 39.99 },
        { id: 7, title: "Black Dress", image: "https://picsum.photos/202/300", price: 49.99 },
        { id: 8, title: "Yellow Dress", image: "https://picsum.photos/203/300", price: 35.99 },
    ];

    // Filtered dresses based on search text
    const filteredDresses = useMemo(() => {

        return dresses.filter((dress) =>
            dress.title.toLowerCase().includes(searchText.toLowerCase())
        );
    }, [searchText]);

    const handleAddToCart = (item: any) => {
        Alert.alert("Added to Cart", item.title);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                {/* Search Bar */}
                <SearchBar value={searchText} onChange={setSearchText} />

                <View style={styles.conatiner}>
                    <Text style={styles.textStyle}>Dress For Sales</Text>

                    {/* Dress List filtered */}
                    <DressList data={filteredDresses} onAddToCart={handleAddToCart} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default DressScreen;
