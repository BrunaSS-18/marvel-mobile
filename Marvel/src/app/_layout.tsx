import { Stack } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { View, Text, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" />
        
        <View style={styles.header}>
          <Text style={styles.headerHorario}>15:22</Text>

          <View style={styles.bateriaContainer}>
            <Text style={styles.headerBateria}>97%</Text>
            <Image
              source={{
                uri: "https://png.pngtree.com/png-vector/20190307/ourmid/pngtree-vector-full-battery-icon-png-image_762950.jpg",
              }}
              style={styles.imgBateria}
              resizeMode="contain"
            />
          </View>
        </View>

        <View style={{ flex: 1 }}>
          <Stack screenOptions={{ headerShown: false }} />
        </View>
      </SafeAreaView>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dddcdc",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  bateriaContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  imgBateria: {
    width: 20,
    height: 12,
  },
  headerHorario: {
    fontSize: 12,
    fontWeight: "500",
    color: "#5f5d5d",
  },
  headerBateria: {
    fontSize: 12,
    fontWeight: "500",
    color: "#5f5d5d",
  },
});