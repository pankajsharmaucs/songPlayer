import { View, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable';

export default function LauncherPage() {

  const navigation = useNavigation();

  useEffect(() => {

    const timer = setTimeout(() => {
      navigation.navigate('MainPage');
    }, 3000);

  }, [navigation])


  return (
    <View style={styles.container} >
      <Animatable.Image
        animation="pulse"
        iterationCount="infinite"
        source={{ uri: "https://cdn-icons-png.flaticon.com/512/7566/7566380.png" }}
        style={styles.icon}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  icon: {
    width: 100, // Adjust the size of your icon
    height: 100, // Adjust the size of your icon
    marginBottom: 20,
  },
})