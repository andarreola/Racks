import { Stack } from "expo-router";
import {useFonts, Outfit_700Bold, Outfit_900Black} from '@expo-google-fonts/outfit'
import {View, ActivityIndicator} from 'react-native';


export default function RootLayout() {
  const [loaded] = useFonts({Outfit_700Bold, Outfit_900Black});
  if(!loaded) return (
    <View style = {{flex:1,alignItems: 'center', justifyContent: 'center'}}><ActivityIndicator/></View>
  );
  return <Stack screenOptions={{headerShown:false}}/>;
}
