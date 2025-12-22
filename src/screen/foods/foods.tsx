import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import DressList from '../../component/item/item'
import SearchBar from '../../component/searchBar/searchBar'
import { dresses } from '../../utills/silder'

const Foods = () => {
    const [searchText, setSearchText] = useState("");



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
                <SearchBar value={searchText} onChange={setSearchText} />

                <View >
                    <Text >Foods For Sales</Text>
                    <DressList data={filteredDresses} onAddToCart={handleAddToCart} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Foods

const styles = StyleSheet.create({})