import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Button, Avatar, Provider, Divider } from "react-native-paper";
import { React, useState } from "react";

export default function PageHome({ route, navigation }) {
  const { name = "Usuário não definido", avatar = "Aavatar não definido" } =
    route.params || {};
  console.log(name, avatar);

  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState("Visualizar perfil");

  const info = [
    <View style={styles.containerInfo}>
      <View style={styles.containerProp}>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.containerProp}>
        <Avatar.Image
          size={200}
          backgroundColor="#11194bff"
          source={{
            uri: avatar,
          }}
        />
      </View>
    </View>,
  ];

  return (
    <Provider>
      <View style={styles.container}>
        <Button
          style={styles.btn}
          textColor="#fff"
          mode="outlined"
          onPress={() => setVisible(true)}
        >
          {selected}
        </Button>

        <Button
          style={styles.btn}
          textColor="#fff"
          mode="outlined"
          onPress={() => navigation.goBack("PageFirst")}
        >
          Voltar
        </Button>
        {visible && (
          <View style={styles.modalOverlay}>
            <View style={styles.dropdown}>
              <View style={styles.nav}>
                <Text style={styles.titleNav}>Seu perfil</Text>

                <Button
                  textColor="#fff"
                  onPress={() => setVisible(false)}
                  style={styles.closeButton}
                >
                  Fechar
                </Button>
              </View>
              <Divider />

              <Text>{info}</Text>
            </View>
          </View>
        )}
      </View>
    </Provider>
  );
}
const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7f88c5ff",
  },
  modalOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  dropdown: {
    width: "90%",
    height: height * 0.8,
    backgroundColor: "#7f88c5ff",
    borderRadius: 12,
    padding: 10,
  },
  nav: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
  },
  containerInfo: {
    alignItems: "center",
    justifyContent: "center",
    padding: 100,
    gap: 40,
  },
  titleNav: {
    color: "#fff",
    fontWeight: "bold",
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
  },
  btn: {
    backgroundColor: "#11194bff",
  },
});
