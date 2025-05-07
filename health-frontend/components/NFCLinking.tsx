import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Linking from 'expo-linking';
import { Text } from 'react-native';

// Import the nfc_display component
import NFCDisplay from '../app/(profiles)/nfc_display'; // Adjust the path based on your project structure

// Define and export the stack navigator's parameter list
export type RootStackParamList = {
    NFC: { result?: string }; // NFC screen can accept a 'result' parameter for NFC data
};

// Create the stack navigator
const Stack = createStackNavigator<RootStackParamList>();

const NFCLinking = () => {
    // Deep linking configuration
    Linking.createURL("medtrack://");
    const linking = {
        prefixes: ['medtrack://',],
        config: {
            screens: {
                NFC: 'nfc/:result?', // Maps nimiapp://nfc/result or nimiapp://nfc to NFCDisplay
            },
        },
    };

    return (
        <NavigationContainer
            linking={linking}
            fallback={<Text>Loading...</Text>}
        >
            <Stack.Navigator
                initialRouteName="NFC"
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="NFC" component={NFCDisplay} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default NFCLinking;
