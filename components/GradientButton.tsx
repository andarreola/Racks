import {LinearGradient} from 'expo-linear-gradient';
import {Pressable, Text, ViewStyle} from 'react-native';

type Props = {
    title: string;
    onPress: () => void;
    style?: ViewStyle;
    disabled?: boolean;
};

export default function GradientButton({title, onPress, style, disabled}: Props){
    return (
    <Pressable onPress={onPress} disabled = {disabled} style = {[{opacity: disabled ? 0.6 : 1}, style]}>
        <LinearGradient
            colors = {['#F05656', '#EB823D']} //pink to orange
            start = {{x: 0, y: 0}} end = {{x: 1, y: 1}}
            style= {{
                borderRadius: 30, paddingVertical: 14, paddingHorizontal: 24,
                alignItems: 'center', justifyContent: 'center', shadowColor: '#FF6A00',
                shadowOpacity: 0.25, shadowRadius: 8, shadowOffset: {width: 0, height:6}, elevation: 4
            }} 
        >
            <Text style = {{color: '#fff', fontWeight: '600', fontSize: 16}}>
                {title}
            </Text>
        </LinearGradient>
    </Pressable>
    );
}