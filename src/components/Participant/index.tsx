import { Text, TouchableOpacity, View } from "react-native";

import type { Participant as ParticipantInterface } from "../../interfaces";
import { styles } from "./styles";

interface Props {
  participant: ParticipantInterface;
  onRemove: (participant: ParticipantInterface) => void;
}

export const Participant: React.FC<Props> = ({ participant, onRemove }) => {
  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{participant.name}</Text>
      </View>

      <TouchableOpacity
        onPress={() => onRemove(participant)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
};
