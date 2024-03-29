import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import styles from "./styles";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebaseConfig";

export default function Login({ navigation }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const auth = getAuth(app);

  function logar() {
    signInWithEmailAndPassword(auth, user, pass)
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
        <View>
          <Pressable style={styles.botao} onPress={() => logar()}>
            <Text style={styles.textButton}>Enviar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
