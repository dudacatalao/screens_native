import React, {useState} from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

export default function Product({navigation, route}){

    const {id, roupa, valor, imagem } = route.params
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Product</Text>
                <Image source={{uri:imagem}} style={{width:150, height:150}}></Image>
            </View>
        </View>
    )
}