import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { accessories, bikeengine, bike, bikebattery, checkup, cleaning, gear, insurance, tyre } from "../../assets/index";

const cards = [
  { id: 1, image: bike, title: 'Service (at home)', desc: 'Regular bike servicing at your doorstep.', price: '₹500' },
  { id: 2, image: bikeengine, title: 'Repair (at home)', desc: 'Minor repairs handled conveniently at home.', price: '₹300' },
  { id: 3, image: gear, title: 'Engine Repair (garage)', desc: 'Full engine diagnostics and repairs at garage.', price: '₹1500' },
  { id: 4, image: bikebattery, title: 'Battery replacement (at home)', desc: 'Quick battery change at your location.', price: '₹600' },
  { id: 5, image: accessories, title: 'Accessories (at home)', desc: 'Install or upgrade accessories from home.', price: '₹700' },
  { id: 6, image: checkup, title: 'Doorstep checkup', desc: 'Get your bike checked before the ride.', price: '₹200' },
  { id: 7, image: cleaning, title: 'Cleaning and polishing (at home)', desc: 'Shine and clean your bike at home.', price: '₹400' },
  { id: 8, image: tyre, title: 'Tyre replacement on demand', desc: 'Instant tyre changes, no hassle.', price: '₹800' },
  { id: 9, image: insurance, title: 'Insurance (Online)', desc: 'Buy or renew insurance online.', price: '₹1000' },
];

const Services = () => {
  const navigation = useNavigation();
  const [selectedService, setSelectedService] = useState(null);

  const handleBook = (service) => {
    setSelectedService(service);  // Set the selected service
  };

  const handleCloseModal = () => {
    setSelectedService(null);  // Close the modal
  };

  const handleMakePayment = () => {
    alert(`Proceeding with payment for: ${selectedService.title}`);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#f4f4f4' }}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backIcon} 
          onPress={() => navigation.goBack()} 
          accessibilityLabel="Go back to previous screen"
        >
          <Ionicons name="arrow-back" size={24} color="#1E1E1E" />
        </TouchableOpacity>
        <View style={styles.centerContainer}>
          <Text style={styles.heading}>Bike Services</Text>
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.container}>
        {cards.map((card) => (
          <BikeCard 
            key={card.id} 
            card={card} 
            onBook={handleBook} 
          />
        ))}
      </ScrollView>

      {/* Modal for Service Details */}
      <Modal
        visible={selectedService !== null}
        animationType="slide"
        transparent={true}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedService && (
              <>
                <Image source={selectedService.image} style={styles.modalImage} />
                <Text style={styles.modalTitle}>{selectedService.title}</Text>
                <Text style={styles.modalDescription}>{selectedService.desc}</Text>
                <Text style={styles.modalPrice}>{selectedService.price}</Text>
                <TouchableOpacity
                  style={styles.paymentButton}
                  onPress={handleMakePayment}
                >
                  <Text style={styles.paymentButtonText}>Make Payment</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={handleCloseModal}
                >
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

// BikeCard Component
const BikeCard = ({ card, onBook }) => {
  return (
    <View style={styles.bikeCard}>
      <Image source={card.image} style={styles.bikeImage} />
      <View style={styles.bikeInfo}>
        <View style={styles.bikeTopRow}>
          <Text style={styles.username}>{card.title}</Text>
        </View>
        <Text numberOfLines={2} style={styles.description}>{card.desc}</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.bookButton}
          onPress={() => onBook(card)}
          accessibilityLabel={`Book ${card.title} service`}
        >
          <Text style={styles.bookButtonText}>Book Service</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingBottom: 30,
  },
  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 15,
  },
  backIcon: {
    position: 'absolute',
    left: 0,
    paddingHorizontal: 10,
    height: '100%',
    justifyContent: 'center',
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  heading: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 25,
    color: '#1E1E1E',
  },
  bikeCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  bikeImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    resizeMode: 'cover',
    marginRight: 10,
  },
  bikeInfo: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bikeTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  username: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 16,
    color: '#1E1E1E',
  },
  description: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },
  bookButton: {
    alignSelf: 'flex-end',
    marginTop: 8,
    backgroundColor: '#1E1E1E',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'JosefinSans-Regular',
  },

  // Modal Styles
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  modalImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 15,
  },
  modalTitle: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 20,
    color: '#1E1E1E',
    marginBottom: 10,
  },
  modalDescription: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
  modalPrice: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 18,
    color: '#1E1E1E',
    marginBottom: 20,
  },
  paymentButton: {
    backgroundColor: '#1E1E1E',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  paymentButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'JosefinSans-Regular',
  },
  closeButton: {
    marginTop: 10,
  },
  closeButtonText: {
    color: '#1E1E1E',
    fontSize: 14,
    fontFamily: 'JosefinSans-Regular',
  },
});
