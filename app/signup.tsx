import Screen from '../components/Screen';   
import TextField from '../components/TextField';
import GradientButton from '../components/GradientButton';
import { useState } from 'react';
import { View, Text, Pressable, ActivityIndicator, Keyboard, KeyboardAvoidingView } from 'react-native';
import { Link } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../FirebaseConfig';


export default function SignUp() {
    const[username, setUsername] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[confirmPassword, setConfirm] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    const signUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
            alert('Signup successful!');
        } catch (error) {
            console.log(error);
            alert('Signup failed: ' + (error as any).message);
        } finally {
            setLoading(false);
        }
    }

    return (

    <Screen>
        <View style = {{marginTop: 110}}>

            <Text style = {{fontFamily: 'Lemon-Milk', fontSize: 48, lineHeight: 52}}>Create{'\n'}Account</Text>

            <View style = {{marginTop: 10}}/>
            <View style={{ height: 24 }} />

            {/* Input Fields */}

            {/*Username Field*/}
            {/*TODO: validate username*/}

            <KeyboardAvoidingView behavior='padding'>
                <TextField placeholder="Username" value={username} onChangeText={setUsername} autoCapitalize="none" /> 
                <View style={{ height: 12 }} />

                {/*Email Field*/}
                <TextField placeholder="Email" value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address" />
                <View style={{ height: 12 }} />

                {/*Password Field*/}
                <TextField placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
                <View style={{ height: 12 }} />

                {/*Confirm Password Field*/}
                {/*TODO: Make sure passwords match before submitting*/}
                <TextField placeholder="Confirm Password" value={confirmPassword} onChangeText={setConfirm} secureTextEntry />
            </KeyboardAvoidingView>      
        </View>

        <View style={{ height: 22 }} />


        {loading ? (
            <ActivityIndicator size='large' color='0000ff' />
        ) : (
            <GradientButton title="Sign Up" onPress={signUp} />
        )}
        
        
    


        <View style = {{alignItems: 'center', marginTop: 24, flexDirection: 'row', justifyContent: 'center'}}>      
            <Link href = "/login" asChild>
                <Pressable><Text style = {{color: '#F05656', marginLeft: 6, fontWeight: '600', fontFamily: 'DuruSans'}}>Return to login</Text></Pressable>
            </Link> 
        </View>    
    </Screen>
    
);
}