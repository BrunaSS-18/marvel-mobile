import React from "react";
import { View, Image, StyleSheet, ImageBackground } from "react-native";

export function Header() {
  return (
    <View style={styles.header}>
      <ImageBackground
        source={require("../../assets/images/fundo.png")}
        style={styles.imgHeader}
        resizeMode="cover"
      >
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 90,
    width: "100%",
  },
  imgHeader: {
    width: "100%",
    height: "100%",
    justifyContent: "center", 
    alignItems: "center",     
    paddingTop: 10,
  },
  logo: {
    width: 170,
    height: 55,
  },
});