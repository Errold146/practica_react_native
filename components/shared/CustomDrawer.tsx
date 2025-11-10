import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
    DrawerItemList
} from '@react-navigation/drawer'
import { Text, View } from 'react-native'

export default function CustomDrawer(props: DrawerContentComponentProps) {
    return (
        <DrawerContentScrollView
            {...props}
        >
            <View className='flex justify-center items-center mx-3 p-10 mb-10 h-[150px] rounded-xl bg-mora-500 shadow-xl'>
                <View className='flex justify-center items-center bg-white rounded-full h-24 w-24'>
                    <Text className='text-mora-900 font-work-black text-3xl'>ENS</Text>
                </View>
            </View>

            {/* DrawerItems */}

            <DrawerItemList {...props} />

        </DrawerContentScrollView>
    )
}