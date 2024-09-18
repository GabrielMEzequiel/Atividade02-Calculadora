import { StyleSheet, Text, View } from 'react-native';

export default function Screen({ equacao, resultado }) {

  return (
    <View style={screen.container}>
      <Text style={resultado ? screen.secondaryText : screen.primaryText}>
        { equacao }
      </Text>
      <Text style={resultado ? screen.primaryText : screen.secondaryText}>
        { resultado }
      </Text>
    </View>
  );
}

const screen = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 32,
    margin: 4,
    borderRadius: 16,
  },
  primaryText: {
    fontSize: 48,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'right',
  },
  secondaryText: {
    fontSize: 24,
    color: '#000',
    textAlign: 'right',
  },
});