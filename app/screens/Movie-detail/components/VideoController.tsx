import { Pause } from "@assets/icons";
import { Color } from "@src/styles";
import { Text, TouchableOpacity, View } from "react-native";
interface IProps {
    onPress?: () => void
}

function VideoController({onPress}: IProps) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Pause color={Color.white}/>
            <Text>PLAY</Text>
        </TouchableOpacity>
    );
}

export default VideoController;