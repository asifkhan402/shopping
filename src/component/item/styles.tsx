import { StyleSheet } from "react-native";

export default StyleSheet.create({
    list: {
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    row: {
        justifyContent: "space-between",
        marginBottom: 16,
    },
    card: {
        backgroundColor: "#fff",
        width: "48%",
        borderRadius: 16,
        overflow: "hidden",
        elevation: 4, // Android shadow
        shadowColor: "#000", // iOS shadow
        shadowOpacity: 0.1,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
    },
    image: {
        width: "100%",
        height: 150,
    },
    info: {
        padding: 10,
    },
    title: {
        fontSize: 14,
        fontWeight: "600",
        marginBottom: 4,
    },
    price: {
        fontSize: 14,
        fontWeight: "700",
        color: "#2ecc71",
    },
    button: {
        backgroundColor: "#000",
        paddingVertical: 10,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 13,
        fontWeight: "700",
    },
});
