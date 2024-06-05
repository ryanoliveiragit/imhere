import React from "react";
import { SafeAreaView, Text, TextInput } from "react-native";
import { styles } from "./styles";

type InputProps = {
  titleInput: string;
  placeholder?: string
  Type?: "default" | "password";
};

export const Input = ({ titleInput, placeholder, Type }: InputProps) => {
  const [text, onChangeText] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textTitleInput}>{titleInput}</Text>
      <TextInput
        style={styles.input}
        placeholder={Type === "password" ? "**********" : placeholder}
        placeholderTextColor="#717E95"
        onChangeText={onChangeText}
        value={text}
      />
    </SafeAreaView>
  );
};
