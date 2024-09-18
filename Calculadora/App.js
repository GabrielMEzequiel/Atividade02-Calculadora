import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

import Calculadora from './components/Calculadora';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cabecalho}>
        <Text style={styles.subtitulo}>Desenvolvimento para Dispositivos Móveis</Text>
        <Text style={styles.titulo}>Atividade 02 - Calculadora</Text>
      </View>
      <Calculadora />
      <View style={styles.rodape}>
        <Text style={styles.paragrafo}>Desenvolvido por Gabriel Martins Ezequiel</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: StatusBar.currentHeight,
  },
  cabecalho: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rodape: {
    paddingBottom: 16,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  subtitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  paragrafo: {
    fontSize: 14,
  },
});