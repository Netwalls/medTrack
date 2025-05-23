import { Stack } from 'expo-router';

export default function AuthLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="index"
        >
            <Stack.Screen name="index" />
            <Stack.Screen name="login" />
            <Stack.Screen name="register/patient" />
            <Stack.Screen name="register/doctor" />
            <Stack.Screen name="register/admin" />
        </Stack>
    );
}
