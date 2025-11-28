import {View, Text, Pressable, Alert} from 'react-native';
import {router} from 'expo-router';
import {signOutFirebase} from '../../firebase/auth.api';
import Screen from '../../components/Screen';

export default function Settings() {
    const onSignOut = async() => {
        try {
            await signOutFirebase();
            router.replace('/login'); // imediate redirect
        } catch (e: any) {
            Alert.alert('Sign out failed', e?.message ?? 'Unknown error');
        }
    };

    return (
        <Screen>
            <View style = {{paddingTop: 24, gap: 16}}>


                <Pressable
                    onPress = {onSignOut}
                    style = {{padding: 12, borderWidth: 1, borderRadius: 10, alignSelf: 'flex-start'}}
                >
                    <Text>Log Out</Text>
                </Pressable>
            </View>


        </Screen>
    )
}