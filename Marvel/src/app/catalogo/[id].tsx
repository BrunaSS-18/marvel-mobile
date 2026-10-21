import { Text, View, Image, ActivityIndicator, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { BuscarEquipePorNome } from "../../api/get-equipe";

const LOGOS: Record<string, any> = {
  vingadores: require("../../../assets/images/vingadores.png"),
  xmen: require("../../../assets/images/xmen.png"),
  quarteto: require("../../../assets/images/quarteto.png"),
  guardioes: require("../../../assets/images/guardiao.png"),
};

export default function TelaEquipe() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const chaveEquipe = id?.toLowerCase() || "vingadores";

  const { data, isLoading, isError } = useQuery({
    queryKey: ["equipe", chaveEquipe],
    queryFn: () => BuscarEquipePorNome(chaveEquipe),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <View style={styles.carregamento}>
        <ActivityIndicator color="#FF2817" size="large" />
        <Text style={styles.textoCarregando}>Carregando equipe...</Text>
      </View>
    );
  }

  if (isError || !data) {
    return (
      <View style={styles.carregamento}>
        <Text style={styles.textoErro}>Erro ao carregar a equipe.</Text>
      </View>
    );
  }

  const herois = Array.isArray(data) ? data : data.herois || [];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={LOGOS[chaveEquipe] || LOGOS.vingadores}
          style={styles.logoHeader}
          resizeMode="contain"
        />
      </View>

      <FlatList
        data={herois}
        keyExtractor={(item, index) => item.id?.toString() || index.toString()}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.cardHeroi}
            onPress={() => router.push(`/catalogo/heroi/${item.id}`)}
            activeOpacity={0.7}
          >
            {item.imagemUrl && (
              <Image source={{ uri: item.imagemUrl }} style={styles.fotoHeroi} />
            )}
            <View style={styles.infoHeroi}>
              <Text style={styles.nomeHeroi}>{item.nome}</Text>
              {item.poderes && (
                <Text style={styles.detalheHeroi} numberOfLines={1}>
                  Poderes: {item.poderes}
                </Text>
              )}
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
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
    backgroundColor: "#f1eeee",
    gap: 10,
  },
  textoCarregando: {
    fontSize: 16,
    color: "#555",
  },
  textoErro: {
    fontSize: 16,
    color: "#FF2817",
  },
  header: {
    backgroundColor: "#FF2817", 
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  logoHeader: {
    width: 220,
    height: 80,
  },
  lista: {
    padding: 16,
    gap: 12,
  },
  cardHeroi: {
    flexDirection: "row",
    backgroundColor: "#FFF", 
    padding: 14,
    alignItems: "center",
  },
  fotoHeroi: {
    width: 65,
    height: 65,
    borderRadius: 33,
    marginRight: 14,
  },
  infoHeroi: {
    flex: 1,
  },
  nomeHeroi: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111",
    marginBottom: 4,
  },
  detalheHeroi: {
    fontSize: 15,
    color: "#4e4e4e",
  },
});