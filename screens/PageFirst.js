import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button, Avatar } from "react-native-paper";
import { useState } from "react";

export default function PageFirst({ navigation }) {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const isValid = name == "" || avatar == "";

  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Avatar.Image
          size={100}
          backgroundColor="#11194bff"
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
        style={[
          styles.button,
          { backgroundColor: isValid ? "#cdcdd1ff" : "#11194bff" },
        ]}
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
    backgroundColor: "#7f88c5ff",
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
    backgroundColor: "#b1b7dbff",
    marginTop: 10,
    borderWidth: 1,
    padding: 8,
    borderRadius: 10,
    width: 200,
    height: 40,
  },
});
