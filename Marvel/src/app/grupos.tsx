import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Grupos() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../../assets/images/fundo.png")}
      style={styles.container}
      resizeMode="stretch"
    >
      <View style={styles.conteudo}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/images/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <View style={styles.botoesContainer}>
          <TouchableOpacity
            style={styles.btnEquipe}
            onPress={() => router.push("/catalogo/vingadores")}
          >
            <Text style={styles.btnTexto}>VINGADORES</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnEquipe}
            onPress={() => router.push("/catalogo/xmen")}
          >
            <Text style={styles.btnTexto}>X-MEN</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnEquipe}
            onPress={() => router.push("/catalogo/quarteto")}
          >
            <Text style={styles.btnTexto}>QUARTETO FANTÁSTICO</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnEquipe}
            onPress={() => router.push("/catalogo/guardioes")}
          >
            <Text style={styles.btnTexto}>GUARDIÕES DA GALÁXIA</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  conteudo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 30,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 35,
  },
  logo: {
    width: 280,
    height: 120,
  },
  botoesContainer: {
    width: "100%",
    gap: 14,
  },
  btnEquipe: {
    backgroundColor: "#D92525",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  btnTexto: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
    letterSpacing: 1.2,
    textAlign: "center",
  },
});