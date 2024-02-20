import React, {useState} from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./styles";

export default function Products(){

    const lista = [
        {
            id: '1',
            produto: 'Blusa tal',
            valor: 'R$50,00'
        },
        {
            id: '2',
            produto: 'Calça',
            valor: 'R$150,00'
        },
        {
            id: '3',
            produto: 'Body',
            valor: 'R$70,00'
        },
        {
            id: '4',
            produto: 'Saia',
            valor: 'R$100,00'
        },
        {
            id: '5',
            produto: 'Blazer',
            valor: 'R$250,00'
        },
    ]

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Products</Text>

                <FlatList
                    data={lista}
                    numColumns={2}
                    renderItem={({item}) =>
                    <View>
                        <Text>Roupas: {item.produto} Valor: {item.valor}</Text>
                    </View>
                    }
                />
            </View>
        </View>
    )
}