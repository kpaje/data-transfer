import React, { Component } from "react";
import {
	StyleSheet,
	TextInput,
	View,
	TouchableOpacity,
	Text
} from "react-native";
import { StackNavigator } from "react-navigation";
import SecondActivity from "./SecondActivity";

class MainActivity extends Component {
	static navigationOptions = {
		title: "MainActivity"
	};

	constructor(props) {
		super(props);
		this.state = {
			TextInput_Name: "",
			TextInput_Number: ""
		};
	}

	Send_Data_Function = () => {
		this.props.navigation.navigate("Second", {
			NameOBJ: this.state.TextInput_Name,
			NumberOBJ: this.state.TextInput_Number
		});
	};

	render() {
		return (
			<View style={styles.MainContainer}>
				<TextInput
					placeholder="Enter Name here"
					onChangeText={data => this.setState({ TextInput_Name: data })}
					style={styles.textInputStyle}
					underlineColorAndroid="transparent"
				/>

				<TextInput
					placeholder="Enter Mobile Number here"
					onChangeText={data => this.setState({ TextInput_Number: data })}
					style={styles.textInputStyle}
					keyboardType={"numeric"}
					underlineColorAndroid="transparent"
				/>

				<TouchableOpacity
					onPress={this.Send_Data_Function}
					activeOpacity={0.7}
					style={styles.button}
				>
					<Text style={styles.buttonText}>
						{" "}
						Send TextInput Value To Next Activity{" "}
					</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

export default MainActivity;
export default (Project = StackNavigator({
	First: { screen: MainActivity },
	Second: { screen: SecondActivity }
}));

const styles = StyleSheet.create({
	MainContainer: {
		alignItems: "center",
		flex: 1,
		margin: 10
	},

	textInputStyle: {
		height: 40,
		width: "90%",
		textAlign: "center",
		borderWidth: 1,
		borderColor: "#028b53",
		borderRadius: 8,
		marginTop: 15
	},

	button: {
		width: "90%",
		height: 40,
		padding: 10,
		backgroundColor: "#4CAF50",
		borderRadius: 8,
		marginTop: 15
	},

	buttonText: {
		color: "#fff",
		textAlign: "center"
	},

	textStyle: {
		color: "#000",
		textAlign: "center",
		fontSize: 20
	}
});
