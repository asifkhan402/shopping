import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Route } from './src/route/stack/stack';

export default function App() {
  return (


    <NavigationContainer>
      <Route />
      <StatusBar hidden={true} />
    </NavigationContainer>

  );
}
