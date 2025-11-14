import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import {TextInput, View, TextInputProps} from 'react-native';

type Props = TextInputProps & {leftIcon?: React.ReactNode; };

export default function TextField(props: Props){
    const [focused, setFocused] = useState(false);
    
    return (
        <LinearGradient
            colors = {focused ? ['#F05656', '#EB823D'] : ['#EDEDED', '#EDEDED']}
            start={{ x: 0, y: 0}} end = {{x : 1, y : 1}}
            style = {{borderRadius: 14, padding: 1}}
        >
            <View
                style = {{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#ffffff',
                    borderRadius: 13,
                    paddingHorizontal: 14, 
                    height: 52
                }}
            >
                {props.leftIcon}
                <TextInput
                    {...props}
                    placeholderTextColor = '#9Fa4AD'
                    onFocus = {(e) => {setFocused(true); props.onFocus?.(e);}}
                    onBlur = {(e) => {setFocused(false); props.onBlur?.(e);}}
                    style = {[{flex:1, fontSize:16} as any, props.style]}
                />              
            </View>
        </LinearGradient>    
    );
}