import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import styles from "./styles";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebaseConfig";
import axios from "axios";

export default function Register({ navigation }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const auth = getAuth(app);

  function pesquisar(){
    console.log(cep)
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) =>{
      console.log(response.data.logradouro)
    })
  }

  function cadastrar() {
    createUserWithEmailAndPassword(auth, user, pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigation.navigate('Home')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  
  }

  return (
    <View style={styles.container}>
      <View style={styles.square}>
        <View>
          <Text style={styles.title}>Login</Text>
        </View>

        <View style={styles.boxbox}>
          <TextInput
            placeholder="User"
            style={styles.box}
            onChangeText={setUser}
            value={user}
          />
        </View>
        <View style={styles.boxbox}>
          <TextInput
            placeholder="Password"
            style={styles.box}
            onChangeText={setPass}
            value={pass}
            secureTextEntry={true}
          />
        </View>

        <View style={styles.boxbox}>
          <TextInput
            placeholder="cep"
            style={styles.box}
            onChangeText={setCep}
            value={cep}
            secureTextEntry={true}
          />
        </View>
        <View>
          <Pressable 
            style={styles.botao} 
            onPress={() => {pesquisar()}}>
            <Text style={styles.textButton}>Enviar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
