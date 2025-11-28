// app/_layout.tsx  (pre-auth)
import { router, Stack } from 'expo-router';
import { ActivityIndicator, View, StatusBar, useColorScheme, Pressable } from 'react-native';
import { useFonts, Outfit_700Bold, Outfit_900Black } from '@expo-google-fonts/outfit';
import Ionicons from '@expo/vector-icons/build/Ionicons';


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
  
  return (
    <Stack>
      <Stack.Screen name = "login" options = {{headerShown: false}}/>
      <Stack.Screen name = "signup" options = {{headerShown: false}}/>
      <Stack.Screen name = "(tabs)" options = {{headerShown: false}}/>

      <Stack.Screen 
        name = "settings"
        options = {{
          headerShown: true,
          title: 'Settings',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Lemon-Milk',
            fontSize: 22,
          },
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerLeft: () => (
            <Pressable onPress = {() => router.replace('/(tabs)/profile')}>
              <Ionicons name = "chevron-back-sharp" size = {24}/>
            </Pressable>
          
          ),
        }}
        
      />    
    </Stack>
  );
}
