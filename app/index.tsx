import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '@/app/screens/Login'
import GradientButton from './components/GradientButton';
import { View } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <View>
      <GradientButton title="Login" onPress={() => {/* call your auth */}} />
    </View>
  );
}
