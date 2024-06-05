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

import { Input } from "../../../shared/components/input/input";
import { styles } from "./styles";

export default function Register() {
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
      <View>
      <Text style={styles.title}>Criar nova conta</Text>
        <Text style={styles.description}>
          As informações pessoais são usadas para registro e validação.
        </Text></View>
        <View style={styles.containerRegister}>
          <Input
            Type="default"
            placeholder="Seu nome"
            titleInput="Nome completo"
          />
          <Input
            Type="default"
            placeholder="exemple@email.com"
            titleInput="E-mail"
          />
  
          <Input Type="password" placeholder="*******" titleInput="Senha" />
          <Input
            Type="password"
            placeholder="*******"
            titleInput="Confirmar senha"
          />
        </View>
        <Text style={styles.TextNotHaveAccountText}>
          Ao enviar este cadastro você confirma que está autorizado a
          compartilhar essas informações e concorda com nossos
          <Text style={styles.bold}>Termos e condições</Text>
        </Text>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigate("Authentication")}
          >
            <Text style={styles.buttonText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
