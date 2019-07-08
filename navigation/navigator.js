import { createStackNavigator, createAppContainer } from "react-navigation";
import SecondActivity from "../screens/SecondActivity";
import MainActivity from "../screens/MainActivity";

const AppNavigator = createStackNavigator({
	First: { screen: MainActivity },
	Second: { screen: SecondActivity }
});

const Navigator = createAppContainer(AppNavigator);

export default Navigator;
