// app/_layout.tsx  (pre-auth)
import { Stack } from 'expo-router';
import { ActivityIndicator, View, StatusBar, useColorScheme } from 'react-native';
import { useFonts, Outfit_700Bold, Outfit_900Black } from '@expo-google-fonts/outfit';


export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Outfit_700Bold,
    Outfit_900Black, 
    'Lemon-Milk': require('../assets/fonts/LEMONMILK-BoldItalic.otf'),
    'DuruSans': require('../assets/fonts/DuruSans-Regular.ttf')// used for big headings like "Racks" / "Create Account"
  });

  const scheme = useColorScheme();
  const barStyle = scheme === 'dark' ? 'light-content' : 'dark-content';

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
        <StatusBar barStyle={barStyle} />
        <ActivityIndicator />
      </View>
    );
  }
  
  return <Stack screenOptions={{ headerShown: false }} />;

}
