import {
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import type { Participant as ParticipantInterface } from "../../interfaces";
import { Participant } from "../../components";
import { styles } from "./styles";

const exampleParticipants: ParticipantInterface[] = [
  {
    name: "Romulo Iorio",
    id: "0",
  },
  {
    name: "João",
    id: "1",
  },
  {
    name: "Maria",
    id: "2",
  },
  {
    name: "José",
    id: "3",
  },
];

export const Home = () => {
  const handleAddParticipant = () => {
    console.log("Adicionando participante");
  };

  const handleRemoveParticipant = () => {
    console.log("Removendo participante");
  };

  const renderParticipants = exampleParticipants.map((participant) => (
    <Participant
      onRemove={handleRemoveParticipant}
      participant={participant}
      key={participant.id}
    />
  ));

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Sexta, 16 de fevereiro de 2024</Text>

      <View style={styles.form}>
        <TextInput
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          style={styles.input}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      {renderParticipants}
    </SafeAreaView>
  );
};
