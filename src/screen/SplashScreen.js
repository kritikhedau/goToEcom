import { View, Text } from "react-native";
import React, { useEffect } from "react";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("BottomNavigator");
    }, 2000);
  }, []);
  return (
    <View
      style={{ height: "100%", justifyContent: "center", alignItems: "center" }}
    >
      <Text style={{fontSize:30}}>GoToEcom</Text>
    </View>
  );
};

export default SplashScreen;
