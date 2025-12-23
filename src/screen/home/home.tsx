import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../component/header/header'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import styles from './style'
import Carousel from 'react-native-reanimated-carousel'
import images from '../../assets/image'
import DrawerNavigator from '../../route/drawar/drawar'
import { screenName } from '../../route/screenName'
import { sliderData } from '../../utills/silder'
const { width } = Dimensions.get('window');

const Home = () => {

    const navigation = useNavigation<any>()

    const [activeIndex, setactiveIndex] = useState(0)
    return (
        <SafeAreaView style={styles.container}>

            <Header label="Welcome" onPressMenu={() => navigation.dispatch(DrawerActions.openDrawer())} />

            <Carousel
                width={width}
                height={200}
                autoPlay
                loop
                scrollAnimationDuration={1000}
                data={sliderData}
                onSnapToItem={(index) => setactiveIndex(index)}
                renderItem={({ item }) => (
                    <View style={styles.slide}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <Text style={styles.text}>{item.name}</Text>
                    </View>
                )}
            />

            <View style={styles.dotContainer}>
                {sliderData.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            activeIndex === index && styles.activeDot,
                        ]}
                    />
                ))}
            </View>
            <Text style={styles.textStyle}>Category</Text>
            <ScrollView>
                <View style={styles.itemContainer}>
                    <TouchableOpacity style={styles.touchItem} onPress={() => navigation.navigate(screenName.Dress)}>
                        <Image style={styles.imageStyle} source={images.Dress} />
                        <Text style={styles.touchText}>DRESS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touchItem} onPress={() => navigation.navigate(screenName.Sports)}>
                        <Image style={styles.imageStyle} source={images.Sports} />
                        <Text style={styles.touchText}>SPORTS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touchItem} onPress={() => navigation.navigate(screenName.Furniture)}>
                        <Image style={styles.imageStyle} source={images.Funiture} />
                        <Text style={styles.touchText}>FURNITURE</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touchItem} onPress={() => navigation.navigate(screenName.Foods)}>
                        <Image style={styles.imageStyle} source={images.foods} />
                        <Text style={styles.touchText}>FOODS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touchItem} onPress={() => navigation.navigate(screenName.Material)}>
                        <Image style={styles.imageStyle} source={images.Materical} />
                        <Text style={styles.touchText}>MATERIAL</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </SafeAreaView>
    );
}




export default Home
