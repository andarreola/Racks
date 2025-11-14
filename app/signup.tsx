import Screen from '../components/Screen';   
import TextField from '../components/TextField';
import GradientButton from '../components/GradientButton';
import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';


export default function SignUp() {
    const[username, setUsername] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[confirmPassword, setConfirm] = useState('');
    return (

    <Screen>
        <View style = {{marginTop: 110}}>
        <Text style = {{fontFamily: 'Outfit_900Black', fontSize: 48, lineHeight: 52}}>Create{'\n'}Account</Text>
        <View style = {{marginTop: 24}}/>
        <View style={{ height: 24 }} />
        <TextField placeholder="Username" value={username} onChangeText={setUsername} autoCapitalize="none" />
        <View style={{ height: 12 }} />
        <TextField placeholder="Email" value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address" />
        <View style={{ height: 12 }} />
        <TextField placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
        <View style={{ height: 12 }} />
        <TextField placeholder="Confirm Password" value={confirmPassword} onChangeText={setConfirm} secureTextEntry />
        </View>
        <View style={{ height: 22 }} />
        <GradientButton title="Sign Up" onPress={() => {/* call your sign-up */}} />
        
        <View style = {{alignItems: 'center', marginTop: 24, flexDirection: 'row', justifyContent: 'center'}}>
            <Link href = "/login" asChild>
            <Pressable><Text style = {{color: '#F05656', marginLeft: 6, fontWeight: '600'}}>Return to login</Text></Pressable>
        </Link>
        </View>
        
    </Screen>
    
);
}