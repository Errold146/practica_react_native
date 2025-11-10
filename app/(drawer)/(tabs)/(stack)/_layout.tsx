import { Ionicons } from '@expo/vector-icons'
import { router, Stack, useNavigation } from 'expo-router'

export default function StackLayout() {

    const navigation = useNavigation()

    const handleBack = () => {
        if (navigation.canGoBack()) {
            navigation.goBack()
        } else {
            router.replace('/products')
        }
    }

    return (
        <Stack
            screenOptions={{
                contentStyle: {
                    backgroundColor: 'white'
                },
                headerLeft: ({ tintColor }) => (
                    <Ionicons 
                        name={navigation.canGoBack() ? 'arrow-back-outline' : 'menu-outline'} 
                        className='mr-3' 
                        size={26} 
                        onPress={handleBack} 
                    />
                )
            }}
        >
            <Stack.Screen 
                name='home/index'
                options={{
                    title: 'Inicio',
                }}
            />
            <Stack.Screen 
                name='products/index'
                options={{
                    title: 'Productos'
                }}
            />
            <Stack.Screen 
                name='profile/index'
                options={{
                    title: 'Perfil'
                }}
            />
            <Stack.Screen 
                name='settings/index'
                options={{
                    title: 'Ajustes'
                }}
            />
        </Stack>
    )
}