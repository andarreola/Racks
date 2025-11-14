import {View, Text, Pressable} from 'react-native';
import Screen from '../components/Screen';
import TextField from '../components/TextField';
import GradientButton from '../components/GradientButton';
import { useState } from 'react';
import { Link } from 'expo-router';

export default function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Screen>
            <View style = {{marginTop: 160}}>
                <Text style = {{fontFamily: 'Lemon-Milk', fontSize: 48, lineHeight: 52}}>Racks</Text>

                <View style = {{marginTop: 24}}/>

                <TextField
                    placeholder = 'Username'
                    value = {username}
                    onChangeText = {setUsername}
                    autoCapitalize='none'
                    keyboardType = 'email-address'
                />
                <View style = {{height: 14}}/>
                <TextField
                    placeholder = 'Password'
                    value = {password}
                    onChangeText = {setPassword}
                    secureTextEntry
                />

                <View style = {{height: 22}}/>
                <GradientButton title = "Login" onPress={() => {/* call auth */}}/>
                
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