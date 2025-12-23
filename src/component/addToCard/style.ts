import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.55)',
        justifyContent: 'flex-end',
    },
    modalContainer: {
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 16,
    },
    card: {
        backgroundColor: '#f9f9f9',
        padding: 14,
        borderRadius: 12,
        marginBottom: 20,
    },
    itemName: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 6,
    },
    itemPrice: {
        fontSize: 15,
        fontWeight: '700',
        color: '#2ecc71',
    },
    qtySection: {
        marginBottom: 16,
    },
    qtyLabel: {
        fontSize: 14,
        color: '#555',
        marginBottom: 8,
    },
    qtyContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    qtyButton: {
        width: 38,
        height: 38,
        borderRadius: 10,
        backgroundColor: '#eee',
        justifyContent: 'center',
        alignItems: 'center',
    },
    qtyText: {
        fontSize: 20,
        fontWeight: '700',
    },
    quantity: {
        marginHorizontal: 20,
        fontSize: 16,
        fontWeight: '600',
    },
    totalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 18,
    },
    totalLabel: {
        fontSize: 15,
        color: '#555',
    },
    totalPrice: {
        fontSize: 16,
        fontWeight: '700',
    },
    buttonRow: {
        flexDirection: 'row',
        gap: 12,
    },
    cancelButton: {
        flex: 1,
        padding: 14,
        borderRadius: 12,
        backgroundColor: '#e0e0e0',
        alignItems: 'center',
    },
    cancelText: {
        fontWeight: '600',
        color: '#333',
    },
    buyButton: {
        flex: 1,
        padding: 14,
        borderRadius: 12,
        backgroundColor: '#000',
        alignItems: 'center',
    },
    buyText: {
        fontWeight: '700',
        color: '#fff',
    },
});
