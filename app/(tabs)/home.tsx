import { View, Text, Button } from 'react-native';
import { signOut } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { router } from 'expo-router';

export default function Home() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home</Text>
            <Button
                title="Logout"
                onPress={async () => {
            try {
                await signOut(FIREBASE_AUTH);
                router.replace('/login');        // bounce to login immediately
            } catch (e) {
                console.error('signOut failed:', e);
            }
        }}
            />
        </View>
    );
}