import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function MainPage() {
  const { width } = Dimensions.get('window'); // Get screen width for responsiveness
  const navigation = useNavigation();

  // Define card data (this can be dynamic)
  const categories = [
    { id: 1, title: 'Category 1', icon: require('../assets/icon.png'), },
    { id: 2, title: 'Category 2', icon: require('../assets/icon.png'), },
    { id: 3, title: 'Category 3', icon: require('../assets/icon.png'), },
    // Add more categories as needed
  ];

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={category.id}
            style={[styles.card, { width: (width - 40) / 2 }]} // Making the card responsive
            onPress={() => navigation.navigate("DrawerNavigator", { screen: 'Category', params: { catId: category.id } })} // Link navigation placeholder
          >
            <Image source={category.icon} style={styles.icon} />
            <Text style={styles.cardTitle}>{category.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f4f4f4',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // For Android shadow
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
