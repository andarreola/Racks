import React from 'react';
import { Text, StyleSheet, View, Button, Pressable } from 'react-native';
import GradientButton from '../../components/GradientButton';
import Screen from '../../components/Screen';

export default function Create(){
    return (
        <Screen>
            <View>
                <GradientButton
                    title = "Photo"
                    onPress = {() => {/* Go to screen to create photo*/}}
                >
                </GradientButton>

                <View style = {{height: 12}}></View>

                <GradientButton
                    title = "Text"
                    onPress = {() => {/* Go to screen to create text*/}}
                >
                </GradientButton>

                <View style = {{height: 12}}></View>

                <GradientButton
                    title = "Video"
                    onPress = {() => {/* Go to screen to create video*/}}
                >
                </GradientButton>

            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({

    
});
