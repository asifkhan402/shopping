import { Text, Image, TouchableOpacity, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import images from '../../assets/image';
import { screenName } from '../../route/screenName';



const WelcomeScreen = () => {
    const navigation = useNavigation<any>();



    return (
        <SafeAreaView style={styles.container}>

            <Image
                source={images.myStore}
                style={styles.logo}
            />

            <Text style={styles.title}>Welcome to MyStore</Text>
            <Text style={styles.subtitle}>
                Discover the latest fashion, furniture, food & more!
            </Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate(screenName.Home)}>
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default WelcomeScreen;


