import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export const Participant: React.FC = () => {
  const handleRemoveParticipant = () => {
    console.log("Removendo participante");
  };

  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>Romulo Iorio</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleRemoveParticipant}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
};
