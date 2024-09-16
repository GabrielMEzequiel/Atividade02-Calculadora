import { StyleSheet, View } from 'react-native';

import Keyboard from './Keyboard';

export default function Calculadora() {
    return (
        <View style={styles.container}>
            <Keyboard />
        </View>
    );
}
  
const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
    },
});