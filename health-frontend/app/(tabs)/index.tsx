import {
    View,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Image,
    StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TabOneScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                {/* Header with profile pic */}
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <View style={styles.greetingContainer}>
                            <Image
                                source={{ uri: '../../assets/images/dr1.jpeg' }} // Replace with your profile image
                                style={styles.profilePic}
                            />
                            <View style={styles.greetingText}>
                                <Text style={styles.greeting}>
                                    Good Evening,
                                </Text>
                                <Text style={styles.name}>John Doe</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.headerIcons}>
                        <TouchableOpacity style={styles.iconButton}>
                            <Ionicons
                                name="chatbubble-outline"
                                size={24}
                                color="#666"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Ionicons
                                name="heart-outline"
                                size={24}
                                color="#666"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Ionicons
                                name="notifications-outline"
                                size={24}
                                color="#666"
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Search Bar */}
                <View style={styles.searchBar}>
                    <Ionicons name="search-outline" size={20} color="#666" />
                    <TextInput
                        placeholder="Search Doctor, Medicine, Tests..."
                        style={styles.searchInput}
                        placeholderTextColor="#666"
                    />
                </View>

                {/* Quick Consult */}
                <View style={styles.quickConsult}>
                    <View style={styles.quickConsultContent}>
                        <Text style={styles.quickConsultText}>
                            We will assign quick and best doctor
                        </Text>
                        <TouchableOpacity style={styles.consultButton}>
                            <Text style={styles.consultButtonText}>
                                Quick Consult
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Service Icons */}
                <View style={styles.services}>
                    {[
                        { name: 'Doctor', icon: '👨‍⚕️' },
                        { name: 'Lab Test', icon: '🧪' },
                        { name: 'Medicine', icon: '💊' },
                    ].map((service) => (
                        <TouchableOpacity
                            key={service.name}
                            style={styles.serviceItem}
                        >
                            <Text style={styles.serviceIcon}>
                                {service.icon}
                            </Text>
                            <Text style={styles.serviceName}>
                                {service.name}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Upcoming Appointment */}
                <View style={styles.sectionContainer}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>
                            Upcoming Appointment
                        </Text>
                        <TouchableOpacity>
                            <Text style={styles.seeAll}>See All</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.appointmentCard}>
                        <View style={styles.appointmentHeader}>
                            <View style={styles.doctorInfoContainer}>
                                <Image
                                    source={require('../../assets/images/dr1.jpeg')}
                                    style={styles.appointmentDoctorImage}
                                />
                                <View style={styles.doctorTextInfo}>
                                    <Text style={styles.doctorName}>
                                        Dr. Afna Khan
                                    </Text>
                                    <Text style={styles.ratingText}>
                                        ⭐ 4.9
                                    </Text>
                                    <Text style={styles.speciality}>
                                        Skin Specialist | XYZ Hospital
                                    </Text>
                                    <View style={styles.consultationType}>
                                        <Ionicons
                                            name="videocam"
                                            size={16}
                                            color="white"
                                        />
                                        <Text style={styles.consultationText}>
                                            Video Consultation
                                        </Text>
                                    </View>
                                    <View style={styles.appointmentTime}>
                                        <Ionicons
                                            name="time-outline"
                                            size={16}
                                            color="white"
                                        />
                                        <Text style={styles.timeText}>
                                            Today, 5:00 PM
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <TouchableOpacity style={styles.videoButton}>
                                <Ionicons
                                    name="videocam"
                                    size={24}
                                    color="white"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* Doctor Speciality */}
                <View style={styles.sectionContainer}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>
                            Doctor Speciality
                        </Text>
                        <TouchableOpacity>
                            <Text style={styles.seeAll}>See All</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={styles.specialityScroll}
                    >
                        {[
                            { name: 'Ortho', icon: '🦴' },
                            { name: 'Neuro', icon: '🧠' },
                            { name: 'Cardio', icon: '❤️' },
                            { name: 'Skin', icon: '🧬' },
                            { name: 'Dentist', icon: '🦷' },
                        ].map((specialty) => (
                            <TouchableOpacity
                                key={specialty.name}
                                style={styles.specialityItem}
                            >
                                <View style={styles.specialityIcon}>
                                    <Text style={styles.specialityIconText}>
                                        {specialty.icon}
                                    </Text>
                                </View>
                                <Text style={styles.specialityName}>
                                    {specialty.name}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                {/* Top Doctors */}
                <View style={[styles.sectionContainer, { height: 300 }]}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Top Doctors</Text>
                        <TouchableOpacity>
                            <Text style={styles.seeAll}>See All</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView
                        style={{ flex: 1 }}
                        showsVerticalScrollIndicator={false}
                        nestedScrollEnabled={true}
                    >
                        <View style={styles.doctorsList}>
                            {[
                                {
                                    name: 'Dr. Afna Khan',
                                    specialty: 'Skin Specialist | XYZ Hospital',
                                    rating: '4.9',
                                    image: require('../../assets/images/dr1.jpeg'),
                                    isFavorite: true,
                                },
                                {
                                    name: 'Dr. Sana Ali',
                                    specialty: 'Skin Specialist | XYZ Hospital',
                                    rating: '4.9',
                                    image: require('../../assets/images/dr1.jpeg'),
                                },
                                {
                                    name: 'Dr. Sonia Ahmed',
                                    specialty: 'Skin Specialist | XYZ Hospital',
                                    rating: '4.9',
                                    image: require('../../assets/images/dr1.jpeg'),
                                },
                                {
                                    name: 'Dr. M.Asad',
                                    specialty: 'Skin Specialist | XYZ Hospital',
                                    rating: '4.9',
                                    image: require('../../assets/images/dr1.jpeg'),
                                },
                                {
                                    name: 'Dr. Ahmed Maqsood',
                                    specialty: 'Skin Specialist | XYZ Hospital',
                                    rating: '4.9',
                                    image: require('../../assets/images/dr1.jpeg'),
                                },
                            ].map((doctor, index) => (
                                <View key={index} style={styles.doctorCard}>
                                    <View style={styles.doctorInfo}>
                                        <Image
                                            source={doctor.image}
                                            style={styles.doctorImage}
                                        />
                                        <View style={styles.doctorDetails}>
                                            <Text style={styles.doctorName}>
                                                {doctor.name}
                                            </Text>
                                            <Text
                                                style={styles.doctorSpecialty}
                                            >
                                                {doctor.specialty}
                                            </Text>
                                            <View
                                                style={styles.ratingContainer}
                                            >
                                                <Text style={styles.starIcon}>
                                                    ⭐️
                                                </Text>
                                                <Text style={styles.ratingText}>
                                                    {doctor.rating}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                    <TouchableOpacity
                                        style={styles.favoriteButton}
                                    >
                                        <Ionicons
                                            name={
                                                doctor.isFavorite
                                                    ? 'heart'
                                                    : 'heart-outline'
                                            }
                                            size={24}
                                            color={
                                                doctor.isFavorite
                                                    ? '#FF0000'
                                                    : '#666'
                                            }
                                        />
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </View>
                    </ScrollView>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    content: {
        padding: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginTop: 40,
        marginBottom: 20,
    },
    headerLeft: {
        flex: 1,
    },
    greetingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profilePic: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12,
    },
    greetingText: {
        marginBottom: 4,
        justifyContent: 'center',
    },
    greeting: {
        color: '#666',
        fontSize: 10,
    },
    name: {
        fontSize: 15,
        fontWeight: '600',
        marginTop: 3,
    },
    headerIcons: {
        flexDirection: 'row',
        gap: 8,
        marginLeft: 'auto',
        paddingRight: 4,
    },
    iconButton: {
        padding: 2,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 12,
        borderRadius: 25,
        marginBottom: 20,
    },
    searchInput: {
        flex: 1,
        marginLeft: 8,
    },
    quickConsult: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 12,
        marginBottom: 20,
        shadowColor: '',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    quickConsultContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    quickConsultText: {
        fontSize: 16,
        fontWeight: '500',
        flex: 1,
    },
    consultButton: {
        backgroundColor: '#0D3EED',
        paddingVertical: 11,
        paddingHorizontal: 17,
        borderRadius: 20,
    },
    consultButtonText: {
        color: 'white',
        fontWeight: '600',
    },
    services: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    serviceItem: {
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 12,
        flex: 1,
        marginHorizontal: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    serviceIcon: {
        fontSize: 24,
        marginBottom: 8,
    },
    serviceName: {
        fontSize: 14,
    },
    sectionContainer: {
        marginBottom: 24,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
    },
    seeAll: {
        color: '#0066ff',
    },
    appointmentCard: {
        backgroundColor: '#0066ff',
        padding: 16,
        borderRadius: 12,
        textAlign: 'left',
    },
    appointmentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    doctorInfoContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    appointmentDoctorImage: {
        width: 35,
        height: 35,
        borderRadius: 17.5,
        marginRight: 8,
        marginTop: -4,
    },
    doctorTextInfo: {
        gap: 4,
    },
    doctorName: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
    ratingText: {
        color: 'white',
    },
    speciality: {
        color: 'white',
        marginBottom: 2,
    },
    consultationType: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.2)',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 20,
    },
    consultationText: {
        color: 'white',
        marginLeft: 8,
    },
    videoButton: {
        padding: 8,
        borderRadius: 20,
    },
    appointmentTime: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    timeText: {
        color: 'white',
        marginLeft: 8,
    },
    specialityScroll: {
        flexDirection: 'row',
    },
    specialityItem: {
        alignItems: 'center',
        marginRight: 24,
    },
    specialityIcon: {
        width: 64,
        height: 64,
        backgroundColor: '#f0f7ff',
        borderRadius: 32,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
    },
    specialityIconText: {
        fontSize: 24,
    },
    specialityName: {
        fontSize: 14,
    },
    doctorCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 12,
        marginBottom: 12,
    },
    doctorImage: {
        width: 64,
        height: 64,
        borderRadius: 32,
    },
    doctorDetails: {
        flex: 1,
        marginLeft: 12,
    },
    doctorCardName: {
        fontSize: 18,
        fontWeight: '600',
    },
    doctorCardSpeciality: {
        color: '#666',
    },
    doctorCardRating: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    doctorsList: {
        marginTop: 12,
    },

    doctorSpecialty: {
        fontSize: 14,
        color: '#666',
        marginTop: 2,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    starIcon: {
        fontSize: 14,
        marginRight: 4,
    },

    favoriteButton: {
        padding: 8,
    },
    doctorInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
});
