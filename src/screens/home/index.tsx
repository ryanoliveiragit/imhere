import React from "react";
import { Text, View, TouchableOpacity, Image, Button } from "react-native";
import {
  useFonts,
  Poppins_200ExtraLight,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const { navigate } = useNavigation();

  const [fontsLoaded] = useFonts({
    Poppins_200ExtraLight,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/background.png")}
        style={styles.background}
      />
      <View style={styles.textSection}>
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.logo}
        />
        <Text style={styles.textTitle}>Cripto</Text>
        <Text style={styles.textDescription}>
          Seu parceiro inteligente para gerenciar suas criptomoedas.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate("Authentication")}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}
