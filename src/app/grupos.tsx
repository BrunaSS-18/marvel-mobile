import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const GRADIENT_COLORS = ['#e1e2ec', '#a09f9b', '#5a575b'] as const;

const EQUIPES = [
  { id: "vingadores", nome: "VINGADORES", rota: "/catalogo/vingadores" },
  { id: "xmen", nome: "X-MEN", rota: "/catalogo/x-men" },
  { id: "quarteto", nome: "QUARTETO FANTÁSTICO", rota: "/catalogo/quarteto" },
  { id: "guardioes", nome: "GUARDIÕES DA GALÁXIA", rota: "/catalogo/guardioes" },
] as const;

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
          {EQUIPES.map((equipe) => (
            <TouchableOpacity
              key={equipe.id}
              onPress={() => router.push(equipe.rota as any)}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={GRADIENT_COLORS}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.btnEquipe}
              >
                <Text style={styles.btnTexto}>{equipe.nome}</Text>
              </LinearGradient>
            </TouchableOpacity>
          ))}
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
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 35,
  },
  logo: {
    width: 230,
    height: 120,
  },
  botoesContainer: {
    width: "100%",
    gap: 40,
  },
  btnEquipe: {
    paddingVertical: 23,
    borderRadius: 12,
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