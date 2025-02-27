import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"; // For navigation inside the Sidebar

// Sidebar menu content
const SidebarMenu = () => {
  const navigation = useNavigation(); // Hook to access the navigation prop

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 20 }}>
        Sidebar Menu
      </Text>
      {/* Home Link */}
      <TouchableOpacity onPress={() => navigation.navigate("MainPage")}>
        <Text style={{ fontSize: 16, paddingVertical: 10 }}>Home</Text>
      </TouchableOpacity>

      {/* Category Link */}
      <TouchableOpacity onPress={() => navigation.navigate("Category")}>
        <Text style={{ fontSize: 16, paddingVertical: 10 }}>Category</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SidebarMenu;
