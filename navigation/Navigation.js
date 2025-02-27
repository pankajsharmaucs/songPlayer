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



// Main Stack Navigator with a custom header and Drawer
const MainStack = () => {
    return (
        <Stack.Navigator initialRouteName="MainPage">
            <Stack.Screen
                name="Launcher"
                component={LauncherPage}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="MainPage"
                component={MainPage}
                options={{
                    headerShown: false,
                    title: 'Home',
                }}
            />
            <Stack.Screen
                name="Category"
                component={Category}
                options={{
                    headerShown: false,
                    title: 'Category',
                }}
            />
        </Stack.Navigator>
    );
};

// Drawer Navigator that wraps the Main Stack
const AppDrawer = () => {
    return (
        <Drawer.Navigator drawerContent={() => <SidebarMenu />} >
            <Drawer.Screen name="Plyr" component={MainStack} />
        </Drawer.Navigator>
    );
};

// Main Navigation Container
const Navigation = () => {
    return (
        <NavigationContainer>
            <AppDrawer />
        </NavigationContainer>
    );
};

export default Navigation;
