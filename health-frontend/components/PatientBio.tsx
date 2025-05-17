import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from './types'; // Adjust path if needed

// Define Patient interface
interface Patient {
    id: string;
    name: string;
    age: number;
    bloodType: string;
    medicalHistory: string;
    lastVisit: string;
}

// Mock Patient Data with index signature
const mockPatientDatabase: { [key: string]: Patient } = {
    PATIENT123: {
        id: 'PATIENT123',
        name: 'John Doe',
        age: 45,
        bloodType: 'O+',
        medicalHistory: 'Hypertension, Diabetes Type 2',
        lastVisit: '2025-04-15',
    },
    PATIENT456: {
        id: 'PATIENT456',
        name: 'Jane Smith',
        age: 32,
        bloodType: 'A-',
        medicalHistory: 'Asthma',
        lastVisit: '2025-05-01',
    },
};

type PatientBioRouteProp = RouteProp<RootStackParamList, 'PatientBio'>;

export default function PatientBio() {
    const route = useRoute<PatientBioRouteProp>();
    const { patientId } = route.params;
    const [patientBio, setPatientBio] = useState<Patient | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPatientBio = async () => {
            try {
                await new Promise((resolve) => setTimeout(resolve, 500));
                const patient = mockPatientDatabase[patientId];
                if (patient) {
                    setPatientBio(patient);
                } else {
                    setPatientBio(null);
                    alert('Patient not found');
                }
            } catch (error) {
                console.warn('Error fetching patient bio:', error);
                alert('Failed to fetch patient data');
                setPatientBio(null);
            } finally {
                setLoading(false);
            }
        };
        fetchPatientBio();
    }, [patientId]);

    if (loading) {
        return (
            <SafeAreaView style={styles.loadingContainer}>
                <Ionicons name="refresh" size={40} color="#0066ff" />
                <Text style={styles.loadingText}>Loading...</Text>
            </SafeAreaView>
        );
    }

    if (!patientBio) {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.errorText}>No patient data found</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Patient Bio</Text>
                </View>
                <View style={styles.card}>
                    <View style={styles.cardContent}>
                        <View style={styles.infoRow}>
                            <Text style={styles.label}>ID:</Text>
                            <Text style={styles.value}>{patientBio.id}</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.label}>Name:</Text>
                            <Text style={styles.value}>{patientBio.name}</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.label}>Age:</Text>
                            <Text style={styles.value}>{patientBio.age}</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.label}>Blood Type:</Text>
                            <Text style={styles.value}>
                                {patientBio.bloodType}
                            </Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.label}>Medical History:</Text>
                            <Text style={styles.value}>
                                {patientBio.medicalHistory}
                            </Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.label}>Last Visit:</Text>
                            <Text style={styles.value}>
                                {patientBio.lastVisit}
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f7fa', // Light grayish-white for a professional backdrop
    },
    header: {
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50', // Deep blue header
        paddingTop: 20,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        margin: 16,
        marginTop: 16, // Slight margin to move card down
        elevation: 4, // Shadow for Android
        shadowColor: '#000', // Shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        borderWidth: 1,
        borderColor: '#d3d9e0', // Subtle blue-gray border
    },
    cardContent: {
        padding: 16,
    },
    infoRow: {
        flexDirection: 'row',
        marginBottom: 12,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#34495e', // Darker blue-gray for labels
        width: 100,
    },
    value: {
        fontSize: 16,
        color: '#2c3e50', // Matching header blue for values
        flex: 1,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f7fa',
    },
    loadingText: {
        fontSize: 18,
        color: '#0066ff',
        marginTop: 12,
    },
    errorText: {
        fontSize: 18,
        color: '#e74c3c', // Red for errors
        textAlign: 'center',
        marginTop: 20,
    },
});
