import React, { useState, useEffect } from 'react';
import {
    Modal,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import styles from './style';

interface CartItem {
    id: number;
    title: string;
    price: number;
}

interface AddToCartProps {
    visible: boolean;
    item: CartItem | null;
    onClose: () => void;
    onBuy: (quantity: number) => void;
}

const AddToCart: React.FC<AddToCartProps> = ({
    visible,
    item,
    onClose,
    onBuy,
}) => {
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (visible) setQuantity(1);
    }, [visible]);

    const increaseQty = (): void => {
        setQuantity(q => q + 1);
    };

    const decreaseQty = (): void => {
        setQuantity(q => (q > 1 ? q - 1 : q));
    };

    const handleBuy = (): void => {
        if (!item) return;
        onBuy(quantity);
        onClose();
    };

    if (!item) return null;

    return (
        <Modal transparent animationType="slide" visible={visible}>
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>

                    <Text style={styles.title}>Add to Cart</Text>

                    <View style={styles.card}>
                        <Text style={styles.itemName}>{item.title}</Text>
                        <Text style={styles.itemPrice}>Rs {item.price}</Text>
                    </View>

                    <View style={styles.qtySection}>
                        <Text style={styles.qtyLabel}>Quantity</Text>

                        <View style={styles.qtyContainer}>
                            <TouchableOpacity
                                style={styles.qtyButton}
                                onPress={decreaseQty}
                            >
                                <Text style={styles.qtyText}>−</Text>
                            </TouchableOpacity>

                            <Text style={styles.quantity}>{quantity}</Text>

                            <TouchableOpacity
                                style={styles.qtyButton}
                                onPress={increaseQty}
                            >
                                <Text style={styles.qtyText}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.totalRow}>
                        <Text style={styles.totalLabel}>Total</Text>
                        <Text style={styles.totalPrice}>
                            Rs {item.price * quantity}
                        </Text>
                    </View>

                    <View style={styles.buttonRow}>
                        <TouchableOpacity
                            style={styles.cancelButton}
                            onPress={onClose}
                        >
                            <Text style={styles.cancelText}>Cancel</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.buyButton}
                            onPress={handleBuy}
                        >
                            <Text style={styles.buyText}>Buy Now</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </Modal>
    );
};

export default AddToCart;
