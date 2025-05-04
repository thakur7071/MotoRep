import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { accessories,bikeengine,bike,bikebattery,checkup,cleaning,fuel,gear,insurance,tyre } from "../assets/index";


const { width } = Dimensions.get('window');

const Home = () => {
  const router = useRouter();

  const bannerData = [
    { id: 1, title: 'Welcome Offer', image: "https://img.freepik.com/premium-vector/motorcycle-banner-social-media-post-facebook-cover-banner_252779-866.jpg?w=1480" },
    { id: 2, title: 'Special Discount', image: "https://img.freepik.com/premium-psd/psd-black-friday-super-sale-facebook-cover-template_837981-871.jpg?w=1800" },
    { id: 3, title: 'New Arrivals', image: "https://img.freepik.com/premium-psd/motorcycle-sale-banner_252779-819.jpg?w=1380" },
    { id: 4, title: 'Limited Time Deal', image: "https://img.freepik.com/premium-psd/psd-black-friday-super-sale-facebook-cover-template_683133-591.jpg?w=1380" },
  ];
  

  const cards = [
    { id: 1, image: bike, title: 'Service (at home)' },
    { id: 2, image: bikeengine, title: 'Repair (at home)' },
    { id: 3, image: gear, title: 'Engine Repair (garage)' },
    { id: 4, image: bikebattery, title: 'Battery replacement (at home)' },
    { id: 5, image: accessories, title: 'Accessories (at home)' },
    { id: 6, image: checkup, title: 'Doorstep checkup' },
    { id: 7, image: cleaning, title: 'Cleaning and polishing (at home)' },
    { id: 8, image: tyre, title: 'Tyre replacement on demand' },
    { id: 9, image: insurance, title: 'Insurance (Online)' },
  ];
  

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
            <View
              key={card.id}
              style={[
                styles.card,
                index % 3 === 2 ? {} : styles.cardMarginRight,
              ]}
            >
              <Image source={card.image} style={styles.cardImage} />
              <Text style={styles.cardText}>{card.title}</Text>
            </View>
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
              <Image source={{uri:item.image} } style={styles.bannerImage} />
              <Text style={styles.bannerCardText}>{item.title}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
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
});
