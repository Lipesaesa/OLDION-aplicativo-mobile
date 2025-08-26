import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function RegisterScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.info}>
        Conta de responsável é do usuário que ajuda o idoso e tem acesso às suas informações
      </Text>

      <TextInput placeholder="Inserir e-mail" style={styles.input} />
      <TextInput placeholder="Criar uma senha" style={styles.input} secureTextEntry />
      <TextInput placeholder="Confirmar senha" style={styles.input} secureTextEntry />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Já tem uma conta?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
          Entrar
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1,
  justifyContent: 'center',
  padding: 20, backgroundColor: '#fff'
},
  info: { textAlign: 'center',
    marginBottom: 20,
    color: '#6a0dad' 
},
  input: { borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    padding: 12 
},
  button: { 
    backgroundColor: '#d8a7e5',
    padding: 15, borderRadius: 8,
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
    fontWeight: 'bold' 
},
});
