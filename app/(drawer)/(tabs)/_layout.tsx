import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'

export default function TabsLayout() {
    return (
        <Tabs 
            screenOptions={{ 
                tabBarActiveTintColor: '#5914c3',
            }}
        >
            <Tabs.Screen
                name="home/index"
                options={{
                    title: 'Inicio',
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="home-outline" color={color} />,
                }}
            />

            <Tabs.Screen
                name="(stack)"
                options={{
                    title: 'Stack',
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="list-outline" color={color} />,
                    headerShown: false
                }}
            />

            <Tabs.Screen
                name="favorites/index"
                options={{
                    title: 'Favoritos',
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="heart-outline" color={color} />,
                }}
            />
        </Tabs>
    )
}