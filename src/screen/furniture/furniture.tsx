import React, { useState, useMemo } from "react";
import {
  Alert,
  ScrollView,
  Text,
  View,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../../component/searchBar/searchBar";
import DressList from "../../component/item/item";
import { dresses } from "../../utills/silder";
import AddToCart from "../../component/addToCard/addToCard";

const DressScreen = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const filteredDresses = useMemo(() => {
    return dresses.filter((dress) =>
      dress.title.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText]);

  const handleAddToCart = (item: any) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleBuy = (quantity: number) => {
    if (!selectedItem) return;

    Alert.alert(
      "Order Confirmed",
      `${selectedItem.title}\nQuantity: ${quantity}\nPrice: Rs ${selectedItem.price * quantity}`
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Search Bar */}
        <SearchBar value={searchText} onChange={setSearchText} />

        {/* Heading */}
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Dress For Sale</Text>
        </View>

        {/* Dress List */}
        <DressList
          data={filteredDresses}
          onAddToCart={handleAddToCart}
        />
      </ScrollView>

      {/* Add to Cart Modal */}
      <AddToCart
        visible={showModal}
        item={selectedItem}
        onClose={() => setShowModal(false)}
        onBuy={handleBuy}
      />
    </SafeAreaView>
  );
};

export default DressScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  headingContainer: {
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  headingText: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
  },
});
