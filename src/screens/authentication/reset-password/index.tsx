import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import {
  useFonts,
  Poppins_200ExtraLight,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

import { Input } from "../../../shared/components/input/input";

export default function ResetPassword() {
  const { navigate } = useNavigation();
  const [fontsLoaded] = useFonts({
    Poppins_200ExtraLight,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View>
      
        <Text style={styles.title}>Esqueceu a senha?</Text>
        <Text style={styles.description}>
          Informe seu e-mail cadastrado na para enviarmos as intruções de
          redefinição de senha
        </Text>
        <View style={styles.containerRegister}>
          <Input
            Type="default"
            placeholder="example@email.com"
            titleInput="E-mail"
          />
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigate("NewPassword")}
          >
            <Text style={styles.buttonText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
