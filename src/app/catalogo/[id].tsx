import { Text, View, Image, StyleSheet, FlatList, TouchableOpacity, ImageBackground } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useQuery } from "@tanstack/react-query";

import { BuscarEquipePorNome } from "../../api/get-equipe";
import { Footer } from "../../components/Footer";
import { TelaStatus } from "../../components/TelaStatus";

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
    return <TelaStatus tipo="carregando" mensagem="CARREGANDO EQUIPE..." />;
  }

  if (isError || !data) {
    return <TelaStatus tipo="erro" mensagem="ERRO AO CARREGAR A EQUIPE" />;
  }

  const herois = Array.isArray(data) ? data : data.herois || [];

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/images/fundo.png")}
        style={styles.imgHeader}
        resizeMode="cover"
      >
        <View style={styles.header}>
          <Image
            source={LOGOS[chaveEquipe] || LOGOS.vingadores}
            style={styles.logoHeader}
            resizeMode="contain"
          />
        </View>
      </ImageBackground>

      <FlatList
        data={herois}
        keyExtractor={(item, index) => item.id?.toString() || index.toString()}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.cardHeroi}
            onPress={() => router.push(`/catalogo/heroi/${item.id}`)}
            activeOpacity={0.8}
          >
            {item.imagemUrl && (
              <Image source={{ uri: item.imagemUrl }} style={styles.fotoHeroi} />
            )}
            <View style={styles.infoHeroi}>
              <Text style={styles.nomeHeroi}>{item.nome}</Text>
              {item.poderes && (
                <Text style={styles.detalheHeroi}>
                  Poderes: {item.poderes}
                </Text>
              )}
            </View>
          </TouchableOpacity>
        )}
      />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
  },
  logoHeader: {
    marginTop: 5,
    width: 190,
    height: 75,
  },
  imgHeader: {
    width: "100%",
    height: 90,
    marginBottom: 15,
  },
  lista: {
    padding: 12,
    gap: 12,
  },
  cardHeroi: {
    flexDirection: "row",
    backgroundColor: "#8c0402",
    padding: 8,
    borderRadius: 10,
    alignItems: "center",
  },
  fotoHeroi: {
    width: 80,
    height: 80,
    borderRadius: 6,
    marginRight: 13,
  },
  infoHeroi: {
    flex: 1,
  },
  nomeHeroi: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 4,
  },
  detalheHeroi: {
    fontSize: 12,
    color: "#fff",
  },
});