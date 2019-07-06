import { createStackNavigator, createAppContainer } from "react-navigation";
import SecondActivity from "../components/SecondActivity";
import MainActivity from "../components/MainActivity";

const AppNavigator = createStackNavigator({
	First: { screen: MainActivity },
	Second: { screen: SecondActivity }
});

const Navigator = createAppContainer(AppNavigator);

export default Navigator;
