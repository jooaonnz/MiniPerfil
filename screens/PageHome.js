import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button, Avatar } from "react-native-paper";
import { useState } from "react";

export default function PageHome({ route, navigation }) {
  const { name = "Usuário não definido", avatar = "Aavatar não definido" } =
    route.params || {};
  console.log(name, avatar);
  return (
    <View style={styles.container}>
      <Text>Seja bem vindo a pagina incial </Text>

      <View>
        <Button style={styles.button} mode="contained">
          Vesiualizar perfil
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: 60,
    width: 200,
    borderRadius: 30,
  },
});
