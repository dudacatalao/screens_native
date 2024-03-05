import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./components/login";
import Home from "./components/home";
import Products from "./components/products";
import Product from "./components/product";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from "@expo/vector-icons";
import Register from './components/register';

const Pilha = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: 'white',
                    paddingBottom: 1,
                    paddingTop: 1,
                    borderTopColor: 'transparent',
                    borderTopLeftRadius: 20,
                },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: '#555'
            }}
        >
            <Tab.Screen
                name='Login'
                component={Login}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="user" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="home" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name='Products'
                component={Products}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="shopping-bag" size={size} color={color} />
                    )
                }}
            />

            <Tab.Screen
                name='Register'
                component={Register}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="user-plus" size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}

export default function Routers() {
    return (
        <NavigationContainer>
            <Pilha.Navigator>
                <Pilha.Screen
                    name="MyTabs"
                    component={MyTabs}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name="Login"
                    component={Login}
                />
                <Pilha.Screen
                    name="Home"
                    component={Home}
                />
                <Pilha.Screen
                    name="Products"
                    component={Products}
                />
                <Pilha.Screen
                    name="Product"
                    component={Product}
                />
                <Pilha.Screen
                    name="Register"
                    component={Register}
                />
            </Pilha.Navigator>
        </NavigationContainer>
    );
}
