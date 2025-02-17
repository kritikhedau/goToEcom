import { View, Text, StatusBar } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useContext } from "react";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import Listing from "./screen/Listing";
import Shortlisted from "./screen/Shortlisted";

const Tabs = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Listing"
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#ffffff",
        },

        tabBarIcon: ({ focused, size, colour }) => {
          let iconName;
          if (route.name === "Listing") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Shortlisted") {
            iconName = focused
              ? "format-list-bulleted-type"
              : "format-list-bulleted-type";
          }

          return (
            <View
              style={{
                flex: 1,
              }}
            >
              {route.name === "Listing" ? (
                <AntDesign
                  name={iconName}
                  size={25}
                  color={focused ? "black" : "gray"}
                />
              ) : route.name === "Shortlisted" ? (
                <MaterialCommunityIcons
                  name={iconName}
                  size={25}
                  color={focused ? "black" : "gray"}
                />
              ) : (
                ""
              )}
            </View>
          );
        },
      })}
    >
      <Tabs.Screen name="Listing" component={Listing} />
      <Tabs.Screen name="Shortlisted" component={Shortlisted} />
    </Tabs.Navigator>
  );
};

export default BottomTabNavigator;
