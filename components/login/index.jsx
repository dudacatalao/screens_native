import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import styles from "./styles";

export default function Login({ navigation }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  function logar() {
    if (user == "duda" && pass == "123") {
      navigation.navigate("Home");
    } else {
      console.log("Não logou");
    }
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
