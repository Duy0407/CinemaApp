import { DoneIcon } from "@assets/icons";
import { Color } from "@src/styles";
import { Language } from "contants/constants";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface IProps {
  index: number;
  onPress?: (lang: string, index: number) => void
}

function LanguageBottomSheet({ index, onPress }: IProps) {
  return (
    <View
      style={{
        backgroundColor: Color.gray2,
        flex: 1,
        borderRadius: 13,
        padding: 16,
      }}
    >
      {Language.map((item) => (
        <TouchableOpacity
          key={item.index}
          style={{
            paddingLeft: 32,
            height: 48,
            justifyContent: "center",
            borderColor:'red'
          }}
          onPress={() => onPress && onPress(item.lang, item.index)}
        >
          {item.index === index ? (
            <View
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                justifyContent: "center",
                height: "100%",
              }}
            >
              <DoneIcon />
            </View>
          ) : null}
          <Text
            style={{
              fontSize: 16,
              lineHeight: 18,
              fontWeight: "500",
              color: Color.white,
            }}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default LanguageBottomSheet;
