import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";
import { Header } from "./Header";
import { Footer } from "./Footer";

const FOTO_ERRO = require("../../assets/images/erroconexao.png");
const FOTO_CARREGANDO = require("../../assets/images/carregando.png");

interface TelaStatusProps {
  mensagem: string;
  tipo: "carregando" | "erro" | "sucesso";
}

export function TelaStatus({ mensagem, tipo }: TelaStatusProps) {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.conteudo}>
        {tipo === "carregando" && (
          <>
            <Image source={FOTO_CARREGANDO} style={styles.imagem} resizeMode="contain" />
            <ActivityIndicator color="#6A0403" size="large" style={styles.spinner} />
          </>
        )}

        {tipo === "erro" && (
          <Image source={FOTO_ERRO} style={styles.imagem} resizeMode="contain" />
        )}

        {tipo === "sucesso" && (
          <Image source={FOTO_CARREGANDO} style={styles.imagem} resizeMode="contain" />
        )}

        <Text style={styles.texto}>{mensagem}</Text>
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
  },
  conteudo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  spinner: {
    marginBottom: 15,
    transform: [{ scale: 1.4 }],
  },
  imagem: {
    width: 250,
    height: 250,
    marginBottom: 15,
  },
  texto: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#6A0403",
    textAlign: "center",
  },
});