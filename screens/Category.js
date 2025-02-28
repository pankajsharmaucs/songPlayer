import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

export default function Category({ route }) {
  const { catId } = route.params;
  useEffect(() => {
    console.log(`Category ID: ${catId}`);
    // You can fetch category data using the catId here if needed
  }, [catId])

  return (
    <View>
      <Text>Category</Text>
    </View>
  )
}