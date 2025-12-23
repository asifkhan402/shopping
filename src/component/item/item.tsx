import React from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
} from "react-native";
import styles from "./styles";

export type DressItem = {
    id: number;
    title: string;
    image: string;
    price: number;
};

type Props = {
    data: DressItem[];
    onAddToCart: (item: DressItem) => void;
};

const DressList: React.FC<Props> = ({ data, onAddToCart }) => {

    const renderItem = ({ item }: { item: DressItem }) => (
        <View style={styles.card}>
            <Image
                source={{ uri: item.image }}
                style={styles.image}
                resizeMode="cover"
            />

            <View style={styles.info}>
                <Text style={styles.title} numberOfLines={1}>
                    {item.title}
                </Text>

                <Text style={styles.price}>Rs {item.price}</Text>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => onAddToCart(item)}
                activeOpacity={0.8}
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
            numColumns={2}
            columnWrapperStyle={styles.row}
            contentContainerStyle={styles.list}
            showsVerticalScrollIndicator={false}
        />
    );
};

export default DressList;
