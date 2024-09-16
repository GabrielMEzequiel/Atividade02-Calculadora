import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Calculadora from './components/Calculadora';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.cabecalho}>Atividade 02 - Calculadora</Text>
      <Calculadora />
      <Text style={styles.rodape}>Desenvolvido por Gabriel Martins Ezequiel</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cabecalho: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  rodape: {
    fontSize: 12,
  },
});
