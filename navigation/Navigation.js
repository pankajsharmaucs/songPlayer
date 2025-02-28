import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LauncherPage from "../screens/LauncherPage";
import MainPage from "../screens/MainPage";
import Category from "../screens/Category";
import SidebarMenu from "../screens/SidebarMenu";

// Create Stack and Drawer Navigators
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Main Drawer Navigator
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContent={() => <SidebarMenu />}
            screenOptions={{
                headerTitle: 'Admin Panel', // Set the title of the DrawerNavigator here
                headerStyle: {
                    backgroundColor: '#f8f8f8', // Optional: Customize header style
                },
                headerTintColor: '#000', // Optional: Text color for the header title
                headerTitleAlign: 'center', // Optional: Center the header title
            }}
        >
            <Drawer.Screen name="MainPage" component={MainPage} />
            <Drawer.Screen name="Category" component={Category} />
        </Drawer.Navigator>
    );
};

// Main Stack Navigator (for LauncherPage and Drawer)
const MainStack = () => {
    return (
        <Stack.Navigator initialRouteName="DrawerNavigator">
            <Stack.Screen
                name="Launcher"
                component={LauncherPage}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="DrawerNavigator"
                component={DrawerNavigator}
                options={{
                    headerShown: false,
                    title: 'Title',
                }}
            />
        </Stack.Navigator>
    );
};

// Main Navigation Container
const Navigation = () => {
    return (
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    );
};

export default Navigation;
