import React from "react";
import {
  //@View est presque similaire a div pour le web
  View,
  //@Text est destinnee a ecrire des chaine de text
  Text,
  //Permet d'eviter les encoches
  SafeAreaView,
  //Permet de styliser nos elelements
  StyleSheet,
  //
  useColorScheme,
} from "react-native";

export default function Page(): JSX.Element {
  const isDarkMode = useColorScheme() === "dark";
  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.darkText : styles.whiteText}>
        Home page
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //@alignItems de la gauche vers la droite
    alignItems: "center",
    //@justifyContent du haut vers le bas
    justifyContent: "center",
  },
  whiteText: {
    color: "#FFFFFF",
  },
  darkText: {
    color: "#000000",
  },
});
