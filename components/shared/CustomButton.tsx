import { Pressable, PressableProps, Text } from 'react-native'

interface Props extends PressableProps {
    children: string
    btnColor?: string
    variant?: 'contained' | 'text-only'
    textColor?: string
    className?: string
}

export default function CustomButton({ 
    children, 
    btnColor, 
    onPress, 
    onLongPress,
    variant = 'contained',
    textColor,
    className
}: Props) {

    if ( variant === 'text-only' ) {
        return (
            <Pressable
                className={`p-3 ${className}`}
                onPress={onPress}
                onLongPress={onLongPress}
            >
                <Text className={`text-center ${textColor} font-work-black`}>{children}</Text>
            </Pressable>
        )
    }

    return (
        <Pressable
            className={`p-3 rounded-md ${btnColor} active:opacity-80 mb-4 ${className}`}
            onPress={onPress}
            onLongPress={onLongPress}
        >
            <Text className='text-white text-center font-work-medium'>{children}</Text>
        </Pressable>
    )
}