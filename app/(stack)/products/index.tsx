import { products } from '@/store/products.store'
import { Link } from 'expo-router'
import { FlatList, Text, View } from 'react-native'

export default function ProductScreen() {
    return (
        <View className='flex flex-1 px-4 mb-20'>
            <FlatList 
                data={products}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <View className='mt-10'>
                        <Text className='text-2xl font-work-black'>{item.title}</Text>
                        <Text className='font-work-light'>{item.description}</Text>

                        <View className='flex flex-row justify-between mt-5'>
                            <Text className='font-work-black'>{item.price}</Text>
                            <Link
                                href={{
                                    pathname: "/(stack)/products/[id]",
                                    params: { id: item.id }
                                }}
                                className='text-verde-600 font-work-medium'
                            >
                                Detalles
                            </Link>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}