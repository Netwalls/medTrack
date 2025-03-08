import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Alert, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';

export default function NFCManagement() {
  const [isScanning, setIsScanning] = useState(false);
  const [isNFCAvailable, setIsNFCAvailable] = useState(false);

  useEffect(() => {
    checkNFCAvailability();
  }, []);

  const checkNFCAvailability = async () => {
    // In a development build, you would check NFC availability here
    // For now, we'll just simulate it's not available in Expo Go
    setIsNFCAvailable(false);
  };

  const readNfcTag = async () => {
    if (!isNFCAvailable) {
      Alert.alert(
        'NFC Not Available',
        'This feature requires a development build with NFC capabilities. Please rebuild the app with native modules.',
        [{ text: 'OK' }]
      );
      return;
    }

    try {
      setIsScanning(true);
      // NFC scanning code would go here in development build
      
    } catch (ex) {
      console.warn('Error reading NFC:', ex);
      Alert.alert(
        'NFC Error',
        'Error reading NFC tag. Please try again.',
        [{ text: 'OK' }]
      );
    } finally {
      setIsScanning(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>NFC Card Management</Text>
          <TouchableOpacity>
            <Ionicons name="add-circle-outline" size={24} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Scan Card Section */}
        <TouchableOpacity 
          style={[
            styles.scanSection,
            isScanning && styles.scanningSection,
            !isNFCAvailable && styles.disabledSection
          ]}
          onPress={readNfcTag}
        >
          <View style={styles.scanIcon}>
            <Ionicons 
              name={isScanning ? "radio" : "scan-outline"} 
              size={40} 
              color={isNFCAvailable ? "#0066ff" : "#999"} 
            />
          </View>
          <Text style={[styles.scanTitle, !isNFCAvailable && styles.disabledText]}>
            {isScanning ? 'Scanning...' : 'Scan NFC Card'}
          </Text>
          <Text style={[styles.scanSubtitle, !isNFCAvailable && styles.disabledText]}>
            {!isNFCAvailable 
              ? 'NFC not available in Expo Go. Build required.'
              : isScanning 
                ? 'Hold an NFC card near your device'
                : 'Tap to scan and register a new NFC card'
            }
          </Text>
        </TouchableOpacity>

        {/* Recent Scans */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Scans</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>
          {[1, 2, 3].map((_, index) => (
            <View key={index} style={styles.cardItem}>
              <View style={styles.cardInfo}>
                <View style={styles.cardIcon}>
                  <Ionicons name="card" size={24} color="#0066ff" />
                </View>
                <View>
                  <Text style={styles.cardId}>Card ID: NFC-2024-{1000 + index}</Text>
                  <Text style={styles.cardStatus}>Active</Text>
                  <Text style={styles.scanTime}>Last scanned: 2 hours ago</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.moreButton}>
                <Ionicons name="ellipsis-vertical" size={20} color="#666" />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Card Statistics */}
        <View style={styles.statsGrid}>
          {[
            { title: 'Total Cards', count: '156', icon: 'card', color: '#0D3EED' },
            { title: 'Active Cards', count: '142', icon: 'checkmark-circle', color: '#00C48C' },
            { title: 'Inactive', count: '14', icon: 'alert-circle', color: '#FF6B6B' },
            { title: 'New Today', count: '5', icon: 'add-circle', color: '#FFB84C' },
          ].map((stat, index) => (
            <View key={index} style={styles.statCard}>
              <View style={[styles.iconContainer, { backgroundColor: stat.color + '10' }]}>
                <Ionicons name={stat.icon as keyof typeof Ionicons.glyphMap} size={24} color={stat.color} />
              </View>
              <Text style={styles.statCount}>{stat.count}</Text>
              <Text style={styles.statTitle}>{stat.title}</Text>
            </View>
          ))}
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
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  scanSection: {
    backgroundColor: '#f8f9ff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#e6e8f0',
    borderStyle: 'dashed',
  },
  scanningSection: {
    backgroundColor: '#e6ebff',
    borderColor: '#0066ff',
    borderStyle: 'solid',
  },
  scanIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#e6ebff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  scanTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  scanSubtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  seeAll: {
    color: '#0D3EED',
    fontSize: 14,
  },
  cardItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  cardInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  cardIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#f0f7ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  cardId: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  cardStatus: {
    fontSize: 14,
    color: '#00C48C',
    marginBottom: 2,
  },
  scanTime: {
    fontSize: 12,
    color: '#666',
  },
  moreButton: {
    padding: 8,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginBottom: 24,
  },
  statCard: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    width: '47%',
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  statCount: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  statTitle: {
    fontSize: 14,
    color: '#666',
  },
  disabledSection: {
    opacity: 0.7,
    backgroundColor: '#f0f0f0',
  },
  disabledText: {
    color: '#999',
  },
}); 