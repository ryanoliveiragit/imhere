import React, { useEffect } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";

import { Input } from "../../shared/components/input/input";
import { styles } from "./styles";
import * as GoogleSignIn from "expo-google-sign-in";
import {
  useFonts,
  Poppins_200ExtraLight,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../../shared/components/header/header";


export default function Authentication() {
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
        <Text style={styles.title}>Cripto</Text>
        <View style={styles.containerRegister}>
          <Input
            Type="default"
            placeholder="example@email.com"
            titleInput="E-mail"
          />
          <Input Type="password" titleInput="Senha" />
        </View>

        <Text
          style={styles.TextForgotPassword}
          onPress={() => navigate("ResetPassword")}
        >
          Esqueceu a senha?
        </Text>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigate("Authentication")}
          >
            <Text style={styles.buttonText}>ENTRAR</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.textMethods}>Ou entrar com</Text>
        <View style={styles.loginWithServices}>
          <TouchableOpacity
            style={styles.buttonNotHaveAccountText}
            onPress={() => navigate("Authentication")}
          >
            <Image source={require("../../../assets/icons/facebook.png")} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonNotHaveAccountText}>
            <Image source={require("../../../assets/icons/google.png")} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonNotHaveAccountText}
            onPress={() => navigate("Authentication")}
          >
            <Image source={require("../../../assets/icons/github.png")} />
          </TouchableOpacity>
        </View>
      </View>
      <>
        <View>
          <Text
            style={styles.TextNotHaveAccountText}
            onPress={() => navigate("Register")}
          >
            Criar uma conta <Text style={styles.bold}>(Recomendado)</Text>
          </Text>
          <TouchableOpacity
            style={styles.buttonNotHaveAccountText}
            onPress={() => navigate("Authentication")}
          >
            <Text style={styles.buttonTextNotHaveAccount}
              onPress={() => navigate("Homefoda")}>
              Continuar sem conta
            </Text>
          </TouchableOpacity>
        </View>
      </>
    </View>
  );
}
