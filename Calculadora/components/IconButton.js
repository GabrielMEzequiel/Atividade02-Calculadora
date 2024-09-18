import { TouchableOpacity , StyleSheet } from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export default function IconButton({ value, size, onPress }) {
  return (
    <TouchableOpacity  style={button.container} onPress={onPress} activeOpacity={0.5}>
      <FontAwesomeIcon icon={value} size={size ? size : 24} />
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
});