import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity, } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';


const GRADIENT_COLORS = ['#e1e2ec', '#a09f9b', '#5a575b'] as const;

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
          onPress={() => router.push("/grupos")}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={GRADIENT_COLORS}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.btnEntrar}
          >
            <Text style={styles.btnTexto}>ENTRAR</Text>
          </LinearGradient>
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
    width: 300,
    height: 150,
  },
  btnContainer: {
    width: "100%",
    paddingHorizontal: 30,
    paddingBottom: 50,
  },
  btnEntrar: {
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  btnTexto: {
    fontSize: 20,
    color: "#FFF",
    fontWeight: "bold",
    letterSpacing: 1.5,
  },
});