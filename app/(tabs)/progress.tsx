import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Screen from '../../components/Screen'
import GradientButton from '../../components/GradientButton';



export default function Progress(){
    return (
        <Screen>
            <View style ={{height: 500}}>
                {/*TODO: Progress stats will appear here as users add data*/}
            </View>
            <GradientButton
                title = "Create Stat"
                onPress = {() => {/*Go to create stat screen*/}}
            >

            </GradientButton>


        </Screen>
    );
}

const styles = StyleSheet.create({
    
});
