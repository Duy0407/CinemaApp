import { useEffect, useState } from "react";
import { HomeScreen, SplashScreen } from "./app/screens";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { SafeAreaProvider } from "react-native-safe-area-context";
import i18n from "./src/i18n/i18n.config";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isShowSplast, setIsShowSplast] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSplast(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <BottomSheetModalProvider>
          <StatusBar backgroundColor="transparent" translucent />
          {isShowSplast ? (
            <SplashScreen />
          ) : (
            <NavigationContainer>
              <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="HomeScreen" component={HomeScreen}/>
              </Stack.Navigator>
            </NavigationContainer>
          )}
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
