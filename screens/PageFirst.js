import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button, Avatar } from "react-native-paper";
import { useState } from "react";

{
  /*Olhar quais bliotecas tão sendo usadas para colcoar na documentação
  ver isso 
  npm install react-native-paper


  */
}

export default function PageFirst({ navigation }) {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const isValid = name == "" || avatar == "";

  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Avatar.Image
          size={100}
          backgroundColor="#000"
          source={{
            uri: avatar
              ? avatar
              : "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png",
          }}
        />
      </View>

      <View style={styles.form}>
        <Text>Informe a URL do seu avatar</Text>
        <TextInput
          style={styles.input}
          value={avatar}
          onChangeText={setAvatar}
          placeholder="Informe a url do seu avatar"
        />
      </View>
      <View style={styles.form}>
        <Text>Informe seu nome</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Informe seu nome"
        />
      </View>

      <Button
        mode="contained"
        disabled={isValid}
        onPress={() => navigation.navigate("PageHome", { name, avatar })}
      >
        Página Inicial
      </Button>
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
  icon: {
    marginBottom: 40,
  },
  form: {
    marginBottom: 40,
  },

  input: {
    marginTop: 10,
    borderWidth: 1,
    padding: 8,
    borderRadius: 10,
    width: 200,
    height: 40,
  },
});
