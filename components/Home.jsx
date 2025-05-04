import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Image, Modal } from 'react-native';
import { useRouter } from 'expo-router';
import { accessories, bikeengine, bike, bikebattery, checkup, cleaning, fuel, gear, insurance, tyre } from "../assets/index";

const { width } = Dimensions.get('window');

const Home = () => {
  const router = useRouter();
  const [selectedService, setSelectedService] = useState(null);

  const bannerData = [
    { id: 1, title: 'Welcome Offer', image: "https://img.freepik.com/premium-vector/motorcycle-banner-social-media-post-facebook-cover-banner_252779-866.jpg?w=1480" },
    { id: 2, title: 'Special Discount', image: "https://img.freepik.com/premium-psd/psd-black-friday-super-sale-facebook-cover-template_837981-871.jpg?w=1800" },
    { id: 3, title: 'New Arrivals', image: "https://img.freepik.com/premium-psd/motorcycle-sale-banner_252779-819.jpg?w=1380" },
    { id: 4, title: 'Limited Time Deal', image: "https://img.freepik.com/premium-psd/psd-black-friday-super-sale-facebook-cover-template_683133-591.jpg?w=1380" },
  ];

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

  const handleBookService = (service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  const handleMakePayment = () => {
    alert(`Proceeding with payment for: ${selectedService.title}`);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Hero Section */}
      <View style={styles.heroSection}>
        <Text style={styles.title}>Welcome to MotoRep</Text>
        <Text style={styles.subtitle}>"Reliable Bike Repairs at Your Doorstep"</Text>
        <TouchableOpacity 
          style={styles.button} 
          activeOpacity={0.8}
          onPress={() => router.push('/repair')}
        >
          <Text style={styles.buttonText}>Book a Repair</Text>
        </TouchableOpacity>
      </View>

      {/* Cards Section */}
      <View style={styles.cardsSection}>
        <View style={styles.cardsContainer}>
          {cards.map((card, index) => (
            <TouchableOpacity
              key={card.id}
              style={[styles.card, index % 3 === 2 ? {} : styles.cardMarginRight]}
              activeOpacity={0.8}
              onPress={() => handleBookService(card)}
            >
              <Image source={card.image} style={styles.cardImage} />
              <Text style={styles.cardText}>{card.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Banner Section */}
      <View style={styles.bannerSection}>
        <ScrollView
          horizontal
          pagingEnabled
          snapToInterval={width - 40 + 16}
          snapToAlignment="center"
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 8 }}
        >
          {bannerData.map((item) => (
            <View key={item.id} style={styles.bannerCard}>
              <Image source={{uri:item.image}} style={styles.bannerImage} />
              <Text style={styles.bannerCardText}>{item.title}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Modal for Service Details */}
      {selectedService && (
        <Modal
          visible={true}
          animationType="slide"
          transparent={true}
          onRequestClose={handleCloseModal}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
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
            </View>
          </View>
        </Modal>
      )}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heroSection: {
    padding: 30,
    backgroundColor: '#A6C6D8',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 5,
    marginBottom: 20,
  },
  title: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: Dimensions.get('window').width < 350 ? 20 : 25,
    fontWeight: '500',
    color: '#000A26',
    marginBottom: 12,
    letterSpacing: 1.5,
    alignSelf: 'center',
  },
  subtitle: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 15,
    color: '#000A26',
    marginBottom: 25,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#000A26',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'JosefinSans-Regular',
    fontSize: 16,
    textAlign: 'center',
  },
  cardsSection: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    borderWidth: 1,
    borderColor: '#000A26',
    padding: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexBasis: '30%',
    marginBottom: 15,
  },
  cardMarginRight: {
    marginRight: 15,
  },
  cardText: {
    fontFamily: 'JosefinSans-Regular',
    marginTop: 10,
    fontSize: 12,
    color: '#000A26',
    textAlign: 'center',
  },
  cardImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },

  // Banner Styles
  bannerSection: {
    marginTop: 20,
    marginBottom: 20,
  },
  bannerCard: {
    width: width - 40,
    backgroundColor: '#D6E6F2',
    borderRadius: 10,
    marginHorizontal: 5,
    overflow: 'hidden',
  },
  bannerImage: {
    width: '100%',
    height: 130,
    resizeMode: 'cover',
  },
  bannerCardText: {
    fontFamily: 'JosefinSans-Regular',
    color: '#000A26',
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 10,
  },

  // Modal Styles
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  modalImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  modalTitle: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 18,
    color: '#000A26',
    fontWeight: '500',
  },
  modalDescription: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 14,
    color: '#000A26',
    marginVertical: 10,
    textAlign: 'center',
  },
  modalPrice: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 16,
    color: '#000A26',
    marginBottom: 15,
  },
  paymentButton: {
    backgroundColor: '#000A26',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  paymentButtonText: {
    color: 'white',
    fontFamily: 'JosefinSans-Regular',
    fontSize: 14,
  },
  closeButton: {
    marginTop: 10,
  },
  closeButtonText: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 14,
    color: '#000A26',
  },
});
