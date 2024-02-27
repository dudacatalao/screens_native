import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import Login from "./components/login"
import Home from "./components/home"
import Products from "./components/products"
import Product from "./components/product"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from "@expo/vector-icons"


const Pilha = createStackNavigator()
const Tag = createBottomTabNavigator()

function MyTabs(){
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarStyle:{
                    backgroundColor: 'white',
                    paddingBotom:1,
                    paddingTop:1,
                    borderTopColor: 'transparent',
                    borderTopLeftRadius:20,
                },
                tabBarActiveTintColor: 'white',
                tabBarInactivateTintColor: '#555'
            }}
        >
            <Tag.Screen
            name='login'
            component={login}
            options={{
                headerShown:false,
                tabBarStyle:{display: 'none'},
                tabBarIcon:({size, color}) =>(
                    <Feather name="logo" size={size} color={color}></Feather>
                )
            }}
            >
            </Tag.Screen>
        </Tab.Navigator>
    )

}

export default function Routers(){
    return(
        <NavigationContainer>
            <Pilha.Navigator>
                <Pilha.Screen
                    name="MyTabs"
                    component={MyTabs}
                    options={{headerShown: false}}
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
            </Pilha.Navigator>
        </NavigationContainer>
    )
}