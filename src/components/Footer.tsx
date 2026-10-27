import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export function Footer() {
  return (
    <View style={styles.footer}>
        <Text style={styles.texto}>1939 - 2026 MARVEL, BY BRUNA & LUIZA</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#000000",
    paddingVertical: 9,
    alignItems: "center",
    justifyContent: "center",
    },
  texto: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "bold",
  },
})
