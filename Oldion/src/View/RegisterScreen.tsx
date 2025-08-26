import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function RegisterScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>

      <TextInput placeholder="E-mail" style={styles.input} />
      <TextInput placeholder="Senha" style={styles.input} secureTextEntry />
      <TextInput placeholder="Confirmar Senha" style={styles.input} secureTextEntry />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Já tem conta?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
          Entrar
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
      flex: 1, 
      justifyContent: 'center',
      padding: 20, 
      backgroundColor: '#fff' 
},
  title: { 
      fontSize: 28,
      textAlign: 'center',
      marginBottom: 30 
},
  input: { 
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 15,
        padding: 12 
},
  button: { 
        backgroundColor: '#d8a7e5',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center'
},
  buttonText: { 
    color: '#000', 
    fontWeight: 'bold'
},
  footerText: { 
      marginTop: 20,
      textAlign: 'center' 
},
  link: { 
    color: 'purple', 
    fontWeight: 'bold' },
});
