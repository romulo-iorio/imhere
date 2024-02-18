import {
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  FlatList,
  Text,
  View,
  Alert,
} from "react-native";
import { useState } from "react";

import type { Participant as ParticipantInterface } from "../../interfaces";
import { Participant } from "../../components";
import { styles } from "./styles";

const exampleParticipants: ParticipantInterface[] = [
  { name: "Romulo Iorio", id: "0" },
  { name: "João", id: "1" },
  { name: "Maria", id: "2" },
  { name: "José", id: "3" },
  { name: "Pedro", id: "4" },
  { name: "Ana", id: "5" },
  { name: "Paula", id: "6" },
  { name: "Carlos", id: "7" },
  { name: "Rafael", id: "8" },
  { name: "Ricardo", id: "9" },
  { name: "Rodrigo", id: "10" },
  { name: "Rafaela", id: "11" },
  { name: "Ricarda", id: "12" },
  { name: "Rodriga", id: "13" },
];

const EmptyList = () => (
  <Text style={styles.emptyListText}>
    Ninguém chegou no evento ainda? Adicione participantes à sua lista de
    presença.
  </Text>
);

export const Home = () => {
  const [participants, setParticipants] =
    useState<ParticipantInterface[]>(exampleParticipants);
  const [newParticipant, setNewParticipant] = useState("");

  const handleAddParticipant = () => {
    const participantWithThisNameExists = participants.some(
      (participant) => participant.name === newParticipant
    );

    if (participantWithThisNameExists) {
      return Alert.alert(
        "Participante Existe",
        "Já existe um participante na lista com esse nome"
      );
    }
  };

  const handleRemoveParticipant = (participant: ParticipantInterface) => {
    Alert.alert(
      "Remover Participante",
      `Deseja remover o participante ${participant.name} da lista de presença?`,
      [
        { text: "Não, cancelar", style: "cancel" },
        {
          text: "Sim, remover!",
          style: "destructive",
          onPress: () => {
            Alert.alert(
              "Removido!",
              `Participante ${participant.name} removido com sucesso!`
            );
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Sexta, 16 de fevereiro de 2024</Text>

      <View style={styles.form}>
        <TextInput
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          onChangeText={setNewParticipant}
          value={newParticipant}
          style={styles.input}
        />

        <TouchableOpacity
          onPress={handleAddParticipant}
          disabled={!newParticipant}
          style={styles.button}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        renderItem={({ item }) => (
          <Participant participant={item} onRemove={handleRemoveParticipant} />
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={EmptyList}
        data={exampleParticipants}
      />
    </SafeAreaView>
  );
};
