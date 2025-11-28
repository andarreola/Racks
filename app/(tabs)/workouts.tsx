import React from 'react';
import { View, Text, StyleSheet, Pressable, Button} from 'react-native';
import Screen from '../../components/Screen';
import GradientButton from '../../components/GradientButton';

export default function Workouts(){
    return (
        <Screen>
            <View style = {{height: 500}}>
                {/*TODO: Make workouts appear here*/}
            </View>
            <GradientButton
                title = "New Workout"
                onPress={() => {{/*TODO: go to add workout screen*/}}}
            > 
            </GradientButton>
        </Screen>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        fontFamily: 'Lemon-Milk',
        
    },
    addButton: {
        fontFamily: 'Lemon-Milk',

    }
});
