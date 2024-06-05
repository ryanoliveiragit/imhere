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

import { Input } from "../../../../shared/components/input/input";
import { styles } from "./styles";

export default function NewPassword() {
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
        <Text style={styles.title}>Criar nova senha</Text>
        <View style={styles.containerRegister}>
          <Input Type="password" placeholder="Nova senha" titleInput="E-mail" />
          <Input
            Type="password"
            placeholder="Confirmar senha"
            titleInput="E-mail"
          />
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigate("Authentication")}
          >
            <Text style={styles.buttonText}>Redefinir senha</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
