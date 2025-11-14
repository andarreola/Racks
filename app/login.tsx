import {View, Text, Pressable, ActivityIndicator, KeyboardAvoidingView} from 'react-native';
import Screen from '../components/Screen';
import TextField from '../components/TextField';
import GradientButton from '../components/GradientButton';
import { useState } from 'react';
import { Link } from 'expo-router';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    
    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
            alert('Login successful!');
        } catch (error: any) {
            console.error("Login error: ", error);
            alert('Login failed: ' + error.message);
        } finally {
            setLoading(false);
        }
    }


    return (
        <Screen>
            <View style = {{marginTop: 160}}>
                <Text style = {{fontFamily: 'Lemon-Milk', fontSize: 48, lineHeight: 52}}>Racks</Text>

                <View style = {{marginTop: 24}}/>


                <KeyboardAvoidingView behavior = 'padding'>
                    <TextField //Username Field
                        placeholder = 'Email'
                        value = {email}
                        onChangeText = {setEmail}
                        autoCapitalize='none'
                        keyboardType='email-address'
                
                    />
                    <View style = {{height: 14}}/>
                
                    <TextField //Password Field
                        placeholder = 'Password'
                        value = {password}
                        onChangeText = {setPassword}
                        secureTextEntry
                    />

                    <View style = {{height: 22}}/>

                    {loading ? (
                        <ActivityIndicator size = 'large' color = '0000ff'/>
                    ) : (
                        <GradientButton title = "Login" onPress={signIn}/>
                    )}
                </KeyboardAvoidingView>

                
                
                <View style = {{alignItems: 'center', marginTop: 24, flexDirection: 'row', justifyContent: 'center'}}>
                    
                    <Text style = {{fontSize: 14, color: '#6b6b6b', fontFamily: 'DuruSans'}}>New here?</Text>
                    <Link href = "/signup" asChild>
                        <Pressable><Text style = {{color: '#F05656', marginLeft: 6, fontWeight: '600', fontFamily: 'DuruSans'}}>Sign Up</Text></Pressable>
                    </Link>
                </View>
            </View>
        </Screen>    
    );
}