import React from 'react';
import { StyleSheet } from 'react-native';
import Screen from '../../components/Screen';

export default function Profile(){
    return (
        <Screen>
            {/* Placeholder for Profile Screen */}
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Lemon-Milk',
    },
    settingButton: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'right',
        marginRight: 5,
        marginTop: 0
    }    
});
