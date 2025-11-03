import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    // 🔹 Slider Styles
    slide: {
        borderRadius: 12,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12
    },
    image: {
        width: width - 40,
        height: 200,
        borderRadius: 10,
    },
    text: {
        position: 'absolute',
        bottom: 10,
        color: '#fff',
        fontSize: 18,
        backgroundColor: 'rgba(0,0,0,0.4)',
        paddingHorizontal: 8,
        borderRadius: 4,
    },
    dotContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#ccc',
        marginHorizontal: 4,
    },
    activeDot: {
        backgroundColor: '#333',
        width: 10,
        height: 10,
    },

    textStyle: {
        fontSize: 20,
        fontWeight: '600',
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 20,
        color: '#222',
    },
    itemContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    imageStyle: {
        width: width / 2 - 25,
        height: width / 2 - 25,
        marginBottom: 6,
        resizeMode: 'cover'

    },
    touchItem: {
        alignItems: 'center',
        marginBottom: 15,
        backgroundColor: '#ecc5c5ff',
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15,

    },
    touchText: {
        marginTop: 4,
        fontSize: 14,
        color: '#f8efefff',
        fontWeight: '300',
    },
});

export default styles;
