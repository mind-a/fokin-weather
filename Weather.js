import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4Da0B0", "D39D38"]
    },
    Thunderstorm: {
        iconName: "",
        gradient: []
    },
     Drizzle: {
        iconName: "",
        gradient: []
    },
    Rain: {
        iconName: "",
        gradient: []
    },
    Snow: {
        iconName: "",
        gradient: []
    },
    Atmosphere: {
        iconName: "",
        gradient: []
    },
    Clear: {
        iconName: "",
        gradient: []
    },
    Clouds: {
        iconName: "",
        gradient: []
    },
    Mist: {
        iconName: "",
        gradient: []
    },
    Dust: {
        iconName: "",
        gradient: []
    }
}

export default function Weather({temp, condition}){
    return (
        <LinearGradient
            // Background Linear Gradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}>
                <StatusBar barStyle="light-content" />
            <View style = {styles.halfContainer}>
                <MaterialCommunityIcons 
                    name={weatherOptions[condition].iconName} 
                    size={96} 
                    color="white" />
                <Text style = {styles.temp}>
                    {temp}°C
                </Text>
            </View>
            <View style={styles.halfContainer}>

            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp :PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear", 
        "Clouds",
        "Haze"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});