import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../../assets/images/fundo.png")}
      style={styles.container}
      resizeMode="stretch"
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btnEntrar}
          onPress={() => router.push("/grupos")}
        >
          <Text style={styles.btnTexto}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 280,
    height: 120,
  },
  btnContainer: {
    width: "100%",
    paddingHorizontal: 30,
    paddingBottom: 50,
  },
  btnEntrar: {
    backgroundColor: "#D92525",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  btnTexto: {
    fontSize: 20,
    color: "#FFF",
    fontWeight: "bold",
    letterSpacing: 1.5,
  },
});