import React from "react";
import { Text, View, TouchableOpacity, Image, Button } from "react-native";
import {
  useFonts,
  Poppins_200ExtraLight,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

export default function Homefoda() {
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

      <View style={styles.textSection}>
 
        <Text style={styles.textTitle}>Tela do sexo rs</Text>
        <Text style={styles.textDescription}>
          Seu parceiro inteligente para gerenciar suas criptomoedas.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate("Authentication")}
      >
        <Text style={styles.buttonText}>botaozinho de home</Text>
      </TouchableOpacity>
    </View>
  );
}
