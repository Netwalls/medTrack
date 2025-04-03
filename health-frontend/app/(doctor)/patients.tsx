import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
} from 'react-native';

// You'll need to install these packages:
// npm install react-native-vector-icons @expo/vector-icons
import {
    FontAwesome,
    Ionicons,
    MaterialIcons,
    Feather,
} from '@expo/vector-icons';

const DoctorDashboard = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Doctor Dashboard</Text>
                <TouchableOpacity>
                    <Ionicons
                        name="notifications-outline"
                        size={24}
                        color="#adb5bd"
                    />
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.scrollView}>
                {/* Appointment Requests Section */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>
                        Appointment Requests
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.seeAllText}>See All</Text>
                    </TouchableOpacity>
                </View>

                {/* Appointment Request Cards */}
                <View style={styles.appointmentSection}>
                    <AppointmentRequestCard
                        name="Emma Johnson"
                        details="Cardiology • First Visit"
                        time="Wednesday, Apr 2 • 10:30 AM"
                    />

                    <AppointmentRequestCard
                        name="Michael Smith"
                        details="Cardiology • Follow-up"
                        time="Thursday, Apr 3 • 2:15 PM"
                    />
                </View>

                {/* Upcoming Appointments Section */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>
                        Upcoming Appointments
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.seeAllText}>See All</Text>
                    </TouchableOpacity>
                </View>

                {/* Upcoming Appointment Cards */}
                <View style={styles.upcomingSection}>
                    <UpcomingAppointmentCard
                        name="Jessica Williams"
                        details="Cardiology • Follow-up"
                        time="Today, 1:30 PM"
                    />

                    <UpcomingAppointmentCard
                        name="David Brown"
                        details="Cardiology • First Visit"
                        time="Today, 3:45 PM"
                    />
                </View>

                {/* Dashboard Stats Section */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Dashboard</Text>
                </View>

                <View style={styles.statsContainer}>
                    <StatBox number="24" label="Patients" />
                    <StatBox number="8" label="Today" />
                    <StatBox number="156" label="Total" />
                </View>

                {/* Extra space at bottom for navigation bar */}
                <View style={styles.bottomPadding} />
            </ScrollView>

            {/* Bottom Navigation */}
            <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.navItem}>
                    <Ionicons name="home" size={24} color="#4361ee" />
                    <Text style={[styles.navText, styles.activeNavText]}>
                        Home
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem}>
                    <View>
                        <Ionicons
                            name="person-outline"
                            size={24}
                            color="#adb5bd"
                        />
                        <View style={styles.settingsBadge}>
                            <Feather
                                name="settings"
                                size={10}
                                color="#6b7280"
                            />
                        </View>
                    </View>
                    <Text style={styles.navText}>Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem}>
                    <Ionicons name="people-outline" size={24} color="#adb5bd" />
                    <Text style={styles.navText}>Patients</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem}>
                    <Ionicons
                        name="calendar-outline"
                        size={24}
                        color="#adb5bd"
                    />
                    <Text style={styles.navText}>Appointments</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

// Component for Appointment Request Cards
const AppointmentRequestCard = ({ name, details, time }) => {
    return (
        <View style={styles.patientCard}>
            <View style={styles.patientHeader}>
                <View style={styles.patientAvatar}>
                    <Ionicons name="person" size={24} color="#adb5bd" />
                </View>
                <View>
                    <Text style={styles.patientName}>{name}</Text>
                    <Text style={styles.patientDetails}>{details}</Text>
                </View>
            </View>

            <Text style={styles.appointmentTime}>{time}</Text>

            <View style={styles.actionButtons}>
                <TouchableOpacity
                    style={[styles.actionButton, styles.acceptButton]}
                >
                    <Ionicons name="checkmark" size={18} color="white" />
                    <Text style={styles.buttonText}>Accept</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.actionButton, styles.rejectButton]}
                >
                    <Ionicons name="close" size={18} color="white" />
                    <Text style={styles.buttonText}>Reject</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

// Component for Upcoming Appointment Cards
const UpcomingAppointmentCard = ({ name, details, time }) => {
    return (
        <View style={styles.upcomingCard}>
            <View style={styles.dateBadge}>
                <Text style={styles.dateBadgeText}>{time}</Text>
            </View>

            <View style={styles.patientHeader}>
                <View style={styles.patientAvatar}>
                    <Ionicons name="person" size={24} color="#adb5bd" />
                </View>
                <View>
                    <Text style={styles.patientName}>{name}</Text>
                    <Text style={styles.patientDetails}>{details}</Text>
                </View>
            </View>
        </View>
    );
};

// Component for Stat Boxes
const StatBox = ({ number, label }) => {
    return (
        <View style={styles.statBox}>
            <Text style={styles.statNumber}>{number}</Text>
            <Text style={styles.statLabel}>{label}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    scrollView: {
        flex: 1,
    },
    header: {
        padding: 20,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: '#2c3e50',
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 10,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#2c3e50',
    },
    seeAllText: {
        color: '#4361ee',
        fontWeight: '500',
    },
    appointmentSection: {
        paddingHorizontal: 20,
    },
    patientCard: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 15,
        marginBottom: 15,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
    },
    patientHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    patientAvatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#e9ecef',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    patientName: {
        fontSize: 18,
        fontWeight: '600',
        color: '#2c3e50',
    },
    patientDetails: {
        fontSize: 14,
        color: '#6c757d',
    },
    appointmentTime: {
        fontSize: 14,
        color: '#2c3e50',
        marginVertical: 10,
        fontWeight: '500',
    },
    actionButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
    },
    actionButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 8,
        gap: 5,
    },
    acceptButton: {
        backgroundColor: '#10b981',
    },
    rejectButton: {
        backgroundColor: '#ef4444',
    },
    buttonText: {
        color: 'white',
        fontWeight: '500',
    },
    upcomingSection: {
        paddingHorizontal: 20,
    },
    upcomingCard: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 15,
        marginBottom: 15,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        borderLeftWidth: 4,
        borderLeftColor: '#4361ee',
    },
    dateBadge: {
        backgroundColor: '#e0e7ff',
        alignSelf: 'flex-start',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 6,
        marginBottom: 10,
    },
    dateBadgeText: {
        color: '#4361ee',
        fontSize: 12,
        fontWeight: '600',
    },
    statsContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        gap: 15,
        marginBottom: 30,
    },
    statBox: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 20,
        alignItems: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
    },
    statNumber: {
        fontSize: 32,
        fontWeight: '700',
        marginVertical: 10,
        color: '#2c3e50',
    },
    statLabel: {
        color: '#6c757d',
        fontSize: 16,
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        paddingVertical: 12,
        borderTopWidth: 1,
        borderTopColor: 'rgba(0,0,0,0.05)',
    },
    navItem: {
        alignItems: 'center',
    },
    navText: {
        fontSize: 12,
        color: '#adb5bd',
        marginTop: 4,
        fontWeight: '500',
    },
    activeNavText: {
        color: '#4361ee',
    },
    settingsBadge: {
        position: 'absolute',
        top: -5,
        right: -5,
        backgroundColor: '#f3f4f6',
        borderRadius: 10,
        width: 16,
        height: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomPadding: {
        height: 80,
    },
});

export default DoctorDashboard;
