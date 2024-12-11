import { Color } from "@src/styles";
import { useRef, useState } from "react";
import { Animated, StyleSheet, TouchableOpacity, View } from "react-native";

interface IProps {
  onToggle: (newState: boolean) => void;
}

function CheckBox({ onToggle }: IProps) {
  const [isOn, setIsOn] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const toggleSwitch = () => {
    const toValue = isOn ? 0 : 1;
    const newValue = !isOn;
    setIsOn(newValue);
    onToggle(newValue)
    Animated.timing(animatedValue, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 16],
  });

  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [Color.gray3, Color.primary],
  });

  return (
    <TouchableOpacity activeOpacity={1} onPress={toggleSwitch}>
      <Animated.View style={[styles.outter, { backgroundColor }]}>
        <Animated.View
          style={[
            styles.inner,
            {
              transform: [{ translateX }],
              backgroundColor: isOn ? Color.white : Color.gray,
            },
          ]}
        />
      </Animated.View>
    </TouchableOpacity>
  );
}

export default CheckBox;

const styles = StyleSheet.create({
  outter: {
    width: 40,
    height: 24,
    borderRadius: 24,
    padding: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  inner: {
    width: 16,
    height: 16,
    borderRadius: 24,
  },
});
