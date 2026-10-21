import { Text, View, Image, ActivityIndicator, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useQuery } from "@tanstack/react-query";

async function BuscarHeroiPorId(id: string) {
  const response = await fetch(`http://10.92.198.8:8080/api/herois/${id}`);
  if (!response.ok) throw new Error("Erro na API");
  return response.json();
}

export default function DetalhesHeroi() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["heroi", id],
    queryFn: () => BuscarHeroiPorId(id!),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <View style={styles.carregamento}>
        <ActivityIndicator color="#D92525" size="large" />
        <Text style={styles.textoCarregando}>Carregando herói...</Text>
      </View>
    );
  }

  if (isError || !data) {
    return (
      <View style={styles.carregamento}>
        <Text style={styles.textoErro}>Erro ao carregar o herói.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.banner}
        source={{ uri: data.imagemUrl }}
        resizeMode="cover"
      />

      <View style={styles.secao}>
        <Text style={styles.titulo}>{data.nome}</Text>

        <View style={styles.filmeDetalhes}>
          <Text style={styles.detalhes}>{data.nomeReal}</Text>
          <Text style={styles.ponto}>·</Text>
          
          {data.nomeEquipe && (
            <View style={styles.detalhesIdade}>
              <Text style={styles.idadeNumero}>{data.nomeEquipe}</Text>
            </View>
          )}
        </View>

        <TouchableOpacity style={styles.btnAssistir}>
          <Text style={styles.btnTexto}>Favoritar Herói</Text>
        </TouchableOpacity>

        <View style={styles.sinopseContainer}>
          <Text style={styles.sinopseTitulo}>PODERES</Text>
          <Text style={styles.sinopseTexto}>{data.poderes}</Text>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.infoDetalhes}>
            <Text style={styles.infoGenero}>Ocupação</Text>
            <Text style={styles.info}>{data.ocupacao}</Text>
          </View>

          <View style={styles.infoDetalhes}>
            <Text style={styles.infoGenero}>Inimigos</Text>
            <Text style={styles.info}>{data.inimigos}</Text>
          </View>

          <View style={styles.infoDetalhes}>
            <Text style={styles.infoGenero}>Filmes</Text>
            <Text style={styles.info}>{data.filmes}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1eeee",
  },
  carregamento: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111",
    gap: 10,
  },
  textoCarregando: {
    fontSize: 16,
    color: "#FFF",
  },
  textoErro: {
    fontSize: 16,
    color: "#D92525",
  },
  banner: {
    width: "100%",
    minHeight: 280,
  },
  secao: {
    paddingHorizontal: 22,
    paddingTop: 24,
    paddingBottom: 35,
    gap: 10,
  },
  titulo: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#111",
    marginBottom: 4,
  },
  filmeDetalhes: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 16,
  },
  detalhes: {
    fontSize: 16,
    color: "#4e4e4e",
  },
  ponto: {
    fontSize: 16,
    color: "#4e4e4e",
  },
  detalhesIdade: {
    borderWidth: 1,
    borderColor: "#FF2414",
    paddingHorizontal: 14,
    paddingVertical: 5,
    marginLeft: 2,
  },
  idadeNumero: {
    color: "#FF2414",
    fontSize: 14,
    fontWeight: "bold",
  },
  btnAssistir: {
    height: 61,
    backgroundColor: "#FF2817",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  btnTexto: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },

  sinopseContainer: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: "#AAA",
    paddingVertical: 14,
    gap: 10,
  },
  sinopseTitulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111",
    textTransform: "uppercase",
  },
  sinopseTexto: {
    fontSize: 17,
    lineHeight: 27,
    color: "#111",
  },
  infoContainer: {
    paddingTop: 5,
    gap: 17,
  },
  infoDetalhes: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  infoGenero: {
    width: 110,
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
  },
  info: {
    flex: 1,
    fontSize: 16,
    color: "#111",
    lineHeight: 22,
  },
});