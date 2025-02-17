import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNavigator from "./BottomNavigator";
import SplashScreen from "./screen/SplashScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const config = {
    animation: "spring",
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  const screenOptions = {
    headerShown: false,
    transitionSpec: {
      open: config, // For screen opening
      close: config, // For screen closing
    },
  };
  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName="SplashScreen"
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
