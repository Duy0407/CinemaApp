import { StyleProp, Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";

interface IButtonProps {
    text: string
    buttonStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    activeOpacity?: number
    onPress?: () => void
}

export default function Button ({text, textStyle, buttonStyle, activeOpacity = 1, onPress}: IButtonProps) {
    return (
        <TouchableOpacity style={buttonStyle} activeOpacity={activeOpacity} onPress={onPress}>
            <Text style={textStyle}>{text}</Text>
        </TouchableOpacity>
    );
}
