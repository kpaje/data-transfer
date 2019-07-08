import React, { Component } from "react";
import { Image } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import MainActivity from "../screens/MainActivity";
import SecondActivity from "../screens/SecondActivity";

const MainApp = createBottomTabNavigator(
	{
		Home: MainActivity,
		Second: SecondActivity
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, horizontal, tintColor }) => {
				const { routeName } = navigation.state;
				if (routeName === "Home") {
					return (
						<Image
							source={require("../assets/home.png")}
							style={{ width: 20, height: 20 }}
						/>
					);
				} else {
					return (
						<Image
							source={require("../assets/settings.png")}
							style={{ width: 20, height: 20 }}
						/>
					);
				}
			}
		}),
		tabBarOptions: {
			activeTintColor: "#FF6F00",
			inactiveTintColor: "#263238"
		}
	}
);

export default createAppContainer(MainApp);
