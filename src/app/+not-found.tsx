import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter, Stack } from "expo-router";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function NotFoundScreen() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.container}>
        <Header />

        <TouchableOpacity 
          style={styles.conteudo} 
          activeOpacity={0.9}
          onPress={() => router.replace("/")}
        >
          <Image
            source={require("../../assets/images/404.png")}
            style={styles.imagemHulk}
            resizeMode="contain"
          />

          <Text style={styles.texto404}>404</Text>
          <Text style={styles.mensagem}>PÁGINA NÃO ENCONTRADA,</Text>
          <Text style={styles.mensagem}>TENTE NOVAMENTE MAIS TARDE</Text>
        </TouchableOpacity>

        <Footer />
      </View>
    </>
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
    paddingHorizontal: 20,
  },
  imagemHulk: {
    width: 280,
    height: 280,
    marginBottom: 10,
  },
  texto404: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#6A0403",
    marginBottom: 4,
  },
  mensagem: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#6A0403",
    textAlign: "center",
    letterSpacing: 0.5,
  },
});