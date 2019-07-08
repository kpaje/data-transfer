import { createStackNavigator } from "react-navigation";
import MainActivity from "../screens/MainActivity";
import SecondActivity from "../screens/SecondActivity";

export const HomeTab = createStackNavigator(
	{
		Home: MainActivity
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: "#0091EA"
			},
			headerTintColor: "#fff",
			title: "Home Tab"
		}
	}
);

export const SettingsTab = createStackNavigator(
	{
		Settings: SecondActivity
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: "#0091EA"
			},
			headerTintColor: "#FFFFFF",
			title: "Settings Tab"
		}
	}
);
