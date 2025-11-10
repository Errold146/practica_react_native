import CustomDrawer from '@/components/shared/CustomDrawer';
import { Ionicons } from '@expo/vector-icons';
import Drawer from 'expo-router/drawer';

export default function DrawerLayout() {
    return (
        <Drawer
            drawerContent={CustomDrawer}
            screenOptions={{
                overlayColor: 'rgba(0,0,0,0.4)',
                drawerActiveTintColor: 'indigo',
                sceneStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            <Drawer.Screen
                name="(tabs)" 
                options={{
                    headerShown: false,
                    drawerLabel: 'Tabs + Stack',
                    title: 'Tabs + Stack',
                    drawerIcon: ({color, size}) => (
                        <Ionicons size={size} color={color} name='file-tray-stacked-outline' />
                    )
                }}
            />

            <Drawer.Screen
                name="user/index" 
                options={{
                    drawerLabel: 'Usuario',
                    title: 'Usuario',
                    drawerIcon: ({color, size}) => (
                        <Ionicons size={size} color={color} name='person-outline' />
                    )
                }}
            />

            <Drawer.Screen
                name="schedule/index" 
                options={{
                    drawerLabel: 'Cronograma',
                    title: 'Cronograma',
                    drawerIcon: ({color, size}) => (
                        <Ionicons size={size} color={color} name='calendar-outline' />
                    )
                }}
            />
        </Drawer>
    )
}