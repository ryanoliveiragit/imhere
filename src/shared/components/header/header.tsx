import React from 'react';
import { View, Text } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'; // Importar ícones
import { useNavigation } from '@react-navigation/native'; // Importar API de navegação
import { styles } from './styles';

export const Header = () => {
  const navigation = useNavigation(); // Obter a API de navegação

  return (
    <View style={styles.container}>
      <AntDesign 
        name="arrowleft" // Nome do ícone de voltar
        size={24} 
        color="#000" 
        onPress={() => navigation.goBack()} 
      />

      <MaterialCommunityIcons name="help" size={24} color="#000" />
    </View>
  );
};
