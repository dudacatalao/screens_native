import React, {useState} from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

export default function Home({navigation}){
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Welcome to Home</Text>
            </View>

            
            <View>
                <Pressable
                    style={styles.botao}
                    onPress={()=>navigation.navigate('Products')}
                >
                    <Text style={styles.textButton}>OK</Text>
                </Pressable>
            </View>
        </View>
    )
}