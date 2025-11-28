import {router, Tabs} from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export default function TabsLayout(){
    return (
        <Tabs
            
            screenOptions = {{
                headerTitleStyle: {
                    fontFamily:'Lemon-Milk'
                },
                headerShown: true, 
                tabBarShowLabel: false,
                tabBarActiveTintColor:'#F05656',
                tabBarInactiveTintColor: '#9Fa4AD',
                tabBarStyle: {
                    backgroundColor: '#fff',
                    borderTopWidth: 0,
                    elevation: 0,
                    height: 80,
                },
            }} 
        >
            <Tabs.Screen 
                name = "home"
                options = {{
                    title: 'Racks',
                    tabBarIcon: ({color, focused}) =>(
                        <Ionicons
                            name = {focused ? 'home-sharp' : 'home-outline'}
                            size = {28}
                            color = {color}
                        />
                    )
                }}
            
            />
            <Tabs.Screen 
                name = "workouts"
                options = {{
                    tabBarIcon: ({color, focused}) => (
                        <Ionicons
                            name = {focused ? 'barbell-sharp' : 'barbell-outline'}
                            size = {28}
                            color = {color}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name = "createPost"
                options = {{
                    title: 'Create',
                    tabBarIcon: ({color, focused}) => (
                        <Ionicons
                            name = {focused ? 'add-circle-sharp' : 'add-circle-outline'}
                            size = {28}
                            color = {color}
                        />
                    )
                }}
            />
            <Tabs.Screen 
                name = "progress"
                options = {{
                    tabBarIcon: ({color, focused}) => (
                        <Ionicons
                            name = {focused ? 'bar-chart-sharp' : 'bar-chart-outline'}
                            size = {28}
                            color = {color}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name = "profile"
                options = {{
                    headerShown: true,
                    title: '@IFSHINMANI',
                    headerTitleStyle: {
                        fontFamily: 'Lemon-Milk',
                        fontSize: 16,
                    },
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={() => router.push('/screens/settings')}
                            style = {{marginRight: 15}}
                        >
                            <Ionicons name = "settings-sharp" size = {24}/>
                        </TouchableOpacity>
                    ),    
                    tabBarIcon: ({color, focused}) => (
                        <Ionicons
                            name = {focused ? 'person-sharp' : 'person-outline'}
                            size = {28}
                            color = {color}
                        />
                    )
                }}
            />
        </Tabs>
    )
}