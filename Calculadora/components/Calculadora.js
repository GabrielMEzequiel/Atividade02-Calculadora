import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { evaluate } from 'mathjs';

import Keyboard from './Keyboard';
import Screen from './Screen';

export default function Calculadora() {

  const [equacao, setEquacao] = useState('');
  const [resultado, setResultado] = useState('');

  function adicionarEquacao(valor) {
    setEquacao(prevEquacao => {
      if (resultado !== '') {
        valor = resultado + valor
        setResultado('');
        return valor;
      }
      return prevEquacao + valor;
    });
  }

  function apagarEquacao() {
    if (resultado !== '') {
      setResultado('');
      return;
    }
    setEquacao(prevEquacao => prevEquacao.slice(0, -1));
  }

  function calcularResultado() {
    try {
      const resultado = evaluate(equacao);
      setResultado(resultado.toString());
    } catch (error) {
      return;
    }
  }

    return (
        <View style={styles.container}>
            <Screen equacao={equacao} resultado={resultado} />
            <Keyboard adicionarEquacao={adicionarEquacao} apagarEquacao={apagarEquacao} calcularResultado={calcularResultado} />
        </View>
    );
}
  
const styles = StyleSheet.create({
    container: {
        width: '100%',
        maxWidth: 400,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
    },
})