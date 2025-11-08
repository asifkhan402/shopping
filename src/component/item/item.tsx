import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Dimensions,
} from "react-native";

type DressItem = {
    id: number;
    title: string;
    image: string;
    price: number;
};

type Props = {
    data: DressItem[];
    onAddToCart: (item: DressItem) => void;
};

const { width } = Dimensions.get("window");

const DressList: React.FC<Props> = ({ data, onAddToCart }) => {
    const renderItem = ({ item }: { item: DressItem }) => (
        <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>${item.price.toFixed(2)}</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => onAddToCart(item)}
            >
                <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ padding: 10 }}
            numColumns={2} // optional 2-column grid
            columnWrapperStyle={{ justifyContent: "space-between" }}
        />
    );
};

export default DressList;

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        width: (width - 40) / 2,
        borderRadius: 12,
        marginBottom: 15,
    },
    image: {
        width: "100%",
        height: 150,
    },
    title: {
        fontSize: 16,
        fontWeight: "600",
        margin: 8,
    },
    price: {
        fontSize: 14,
        color: "#555",
        marginHorizontal: 8,
    },
    button: {
        backgroundColor: "#4CAF50",
        paddingVertical: 8,
        margin: 8,
        borderRadius: 8,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 14,
    },
});
