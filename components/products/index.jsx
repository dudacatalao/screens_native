import React, {useState} from "react";
import { View, Text, FlatList, Image, Pressable} from "react-native";
import styles from "./styles";

export default function Products({navigation}){

    const lista = [
        {
            id: '1',
            produto: 'Blusa tal',
            valor: 'R$50,00',
            foto: 'https://img.freepik.com/fotos-gratis/bela-jovem-segurando-sacolas-de-compras_23-2148316133.jpg?w=740&t=st=1709035855~exp=1709036455~hmac=f6b7331ebf4caa2c7f963b7e05b256ebee9e739be3d1188b51a3a19730674ef6'
        },
        {
            id: '2',
            produto: 'Calça',
            valor: 'R$150,00',
            foto: 'https://img.freepik.com/fotos-gratis/bela-moda-mulher-posando-com-elegante-terno_1328-3305.jpg?w=740&t=st=1709035918~exp=1709036518~hmac=e26b014538fc40cde78919dd06ebc4fb63d0cbfb16436165396aad90fc913309'
        },
        {
            id: '3',
            produto: 'Body',
            valor: 'R$70,00',
            foto: 'https://img.freepik.com/fotos-gratis/loira-jovem-elegante-vestido-verde_155003-2663.jpg?w=740&t=st=1709035965~exp=1709036565~hmac=1108c1dbe22cdfe880d86e015f4a87ef28a4ebe4815b09f8b668e4714b8674b4'
        },
        {
            id: '4',
            produto: 'Saia',
            valor: 'R$100,00',
            foto: 'https://img.freepik.com/fotos-gratis/alegre-morena-legal-morena-encaracolada-em-shorts-caqui-e-blusa-branca-sorri-toca-o-cabelo-e-se-inclina-no-cabide-no-quarto-aconchegante_197531-29828.jpg?t=st=1709036065~exp=1709039665~hmac=c98ee1732ddf51b117a9f40aeb02171e268bb2665b6dd561ca40856086a325bd&w=740'
        },
        {
            id: '5',
            produto: 'Blazer',
            valor: 'R$250,00',
            foto: 'https://img.freepik.com/fotos-gratis/retrato-da-moda-da-jovem-mulher-elegante_1328-2686.jpg?t=st=1709036101~exp=1709039701~hmac=34fd5f760706e6b3e817d676a6c05c755683ebf90bb48c19172634dabc0e918f&w=740'
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
                    <View style={styles.borderproducts}>
                        <Text style={styles.boxtext}>Roupas: {item.produto}</Text>
                        <Pressable
                            onPress={()=> navigation.navigate('Product', {
                                roupa: item.produto,
                                valor: item.valor,
                                imagem: item.foto,
                                id: item.id
                            })}
                        >
                            <Image source={{uri:item.foto}} style={styles.fotoProducts}></Image>
                        </Pressable>
                        <Text style={styles.boxtext}>Valor: {item.valor}</Text>
                    </View>
                    }
                />
            </View>
        </View>
    )
}