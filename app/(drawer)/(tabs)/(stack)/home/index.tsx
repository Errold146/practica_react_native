import CustomButton from '@/components/shared/CustomButton'
import { DrawerActions } from '@react-navigation/native'
import { router, useNavigation } from 'expo-router'
import { View } from 'react-native'

export default function HomeScreen() {

    const navigation = useNavigation()

    const onToggleDrawer = () => {
        navigation.dispatch(DrawerActions.toggleDrawer)
    }

    return (
        <View className='px-10 mt-20'>
            <CustomButton 
                btnColor='bg-mora-600'
                onPress={() => router.push('/(drawer)/(tabs)/(stack)/products')}
            >
                Productos
            </CustomButton>
            
            <CustomButton 
                btnColor='bg-rosa-600'
                onPress={() => router.push('/(drawer)/(tabs)/(stack)/profile')}
            >
                Perfil
            </CustomButton>

            <CustomButton 
                btnColor='bg-verde-600'
                onPress={() => router.push('/(drawer)/(tabs)/(stack)/settings')}
            >
                Ajustes
            </CustomButton>

            <CustomButton
                btnColor='bg-cyan-600'
                onPress={onToggleDrawer}
            >
                Menú
            </CustomButton>
        </View>
    )
}