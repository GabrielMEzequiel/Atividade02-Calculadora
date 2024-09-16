import { TouchableOpacity , StyleSheet, Alert } from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export default function SimpleButton({ value, onPress }) {
  return (
    <TouchableOpacity  style={button.container} onPress={() => {Alert.alert(`Botão pressionado!`)}} activeOpacity={0.7}>
      <FontAwesomeIcon icon={value} size={24} />
    </TouchableOpacity >
  );
}

const button = StyleSheet.create({

    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        padding: 32,
        margin: 4,
        borderRadius: 16,
    },
    icon: {
        color: '#000',
    },
});