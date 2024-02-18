import { Text, TouchableOpacity, View } from "react-native";

import type { Participant as ParticipantInterface } from "../../interfaces";
import { styles } from "./styles";

interface Props {
  participant: ParticipantInterface;
}

export const Participant: React.FC<Props> = ({ participant }) => {
  const handleRemoveParticipant = () => {
    console.log("Removendo participante");
  };

  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{participant.name}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleRemoveParticipant}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
};
