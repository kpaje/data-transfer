import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class SecondActivity extends Component {
	static navigationOptions = {
		title: "SecondActivity"
	};

	render() {
		return (
			<View style={styles.MainContainer}>
				<Text>SECOND ACTIVITY SCREEN</Text>
				<Text style={styles.textStyle}>
					Name = {this.props.navigation.state.params.NameOBJ}
				</Text>

				<Text style={styles.textStyle}>
					Number = {this.props.navigation.state.params.NumberOBJ}
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	textStyle: {
		color: "#000",
		textAlign: "center",
		fontSize: 20
	}
});
