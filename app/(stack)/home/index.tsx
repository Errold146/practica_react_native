import CustomButton from '@/components/shared/CustomButton'
import { router } from 'expo-router'
import { View } from 'react-native'

export default function HomeScreen() {
    return (
        <View className='px-10 mt-20'>
            <CustomButton 
                btnColor='bg-mora-600'
                onPress={() => router.push('/products')}
            >
                Productos
            </CustomButton>
            
            <CustomButton 
                btnColor='bg-rosa-600'
                onPress={() => router.push('/profile')}
            >
                Perfil
            </CustomButton>

            <CustomButton 
                btnColor='bg-verde-600'
                onPress={() => router.push('/settings')}
            >
                Ajustes
            </CustomButton>
        </View>
    )
}