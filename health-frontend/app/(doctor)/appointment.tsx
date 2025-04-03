import React from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { NavigationProp } from '@react-navigation/native';

// Define screen navigation types
type RootStackParamList = {
    Home: undefined;
    Appointments: undefined;
    Patients: undefined;
};

// Home Page Component
interface HomePageProps {
    navigation: NavigationProp<RootStackParamList, 'Home'>;
}

const HomePage: React.FC<HomePageProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Clinic</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Appointments')}
            >
                <Text style={styles.buttonText}>View Appointments</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Patients')}
            >
                <Text style={styles.buttonText}>View Patients</Text>
            </TouchableOpacity>
        </View>
    );
};

// Appointments Component
const Appointments: React.FC = () => {
    const appointments = [
        { id: '1', patient: 'John Doe', time: '10:00 AM' },
        { id: '2', patient: 'Jane Smith', time: '11:00 AM' },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Appointments</Text>
            <FlatList
                data={appointments}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.cardText}>
                            {item.patient} - {item.time}
                        </Text>
                    </View>
                )}
            />
        </View>
    );
};

// Patients Component
const Patients: React.FC = () => {
    const patients = [
        { id: '1', name: 'John Doe', age: 30 },
        { id: '2', name: 'Jane Smith', age: 25 },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Patients</Text>
            <FlatList
                data={patients}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.cardText}>
                            {item.name} - {item.age} years old
                        </Text>
                    </View>
                )}
            />
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    card: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        width: '100%',
        elevation: 3,
    },
    cardText: {
        fontSize: 16,
    },
});

export { HomePage, Appointments, Patients };
