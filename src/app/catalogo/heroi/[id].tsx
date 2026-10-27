import React from "react";
import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { BuscarHeroiPorId } from "../../../api/get-heroi";
import { useQuery } from "@tanstack/react-query";
import { Footer } from "../../../components/Footer";
import { TelaStatus } from "../../../components/TelaStatus";

export default function DetalhesHeroi() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["heroi", id],
    queryFn: () => BuscarHeroiPorId(id!),
    enabled: !!id,
  });

  const corFundo = data?.cor || "#fff";

  if (isLoading) {
    return <TelaStatus tipo="carregando" mensagem="CARREGANDO HERÓI..." />;
  }

  if (isError || !data) {
    return <TelaStatus tipo="erro" mensagem="ERRO AO CARREGAR O HERÓI" />;
  }

  return (
    <View style={[styles.container, { backgroundColor: corFundo }]}>
      
      <ScrollView contentContainerStyle={styles.conteudo}>
        {data.imagemUrl && (
          <Image
            style={styles.banner}
            source={{ uri: data.imagemUrl }}
            resizeMode="cover"
          />
        )}

        <Text style={styles.titulo}>{data.nome}</Text>

        {data.poderes && (
          <View style={styles.card}>
            <Text style={styles.cardTitulo}>PODERES</Text>
            <Text style={styles.cardTexto}>{data.poderes}</Text>
          </View>
        )}

        {data.inimigos && (
          <View style={styles.card}>
            <Text style={styles.cardTitulo}>INIMIGOS</Text>
            <Text style={styles.cardTexto}>{data.inimigos}</Text>
          </View>
        )}

        {data.filmes && (
          <View style={styles.card}>
            <Text style={styles.cardTitulo}>APARIÇÕES - FILMES</Text>
            <Text style={styles.cardTexto}>{data.filmes}</Text>
          </View>
        )}

        {data.ocupacao && (
          <View style={styles.card}>
            <Text style={styles.cardTitulo}>OCUPAÇÃO</Text>
            <Text style={styles.cardTexto}>{data.ocupacao}</Text>
          </View>
        )}
      </ScrollView>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  conteudo: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 40,
  },
  banner: {
    width: 260,
    height: 260,
    borderRadius: 24,
  },
  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFF",
    textTransform: "uppercase",
    marginVertical: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#FFF",
    width: "100%",
    borderRadius: 18,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  cardTitulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: 10,
  },
  cardTexto: {
    fontSize: 15,
    color: "#333",
    lineHeight: 22,
  },
});