import {
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  FlatList,
  Alert,
  Text,
  View,
} from "react-native";
import { useState } from "react";

import type { Participant as ParticipantInterface } from "../../interfaces";
import { Participant } from "../../components";
import { styles } from "./styles";

const EmptyList = () => (
  <Text style={styles.emptyListText}>
    Ninguém chegou no evento ainda? Adicione participantes à sua lista de
    presença.
  </Text>
);

export const Home = () => {
  const [participants, setParticipants] = useState<ParticipantInterface[]>([]);
  const [newParticipantName, setNewParticipant] = useState("");

  const handleAddParticipant = () => {
    const participantWithThisNameExists = participants.some(
      (participant) => participant.name === newParticipantName
    );

    if (!newParticipantName) {
      return Alert.alert(
        "Nome Inválido",
        "O nome do participante não pode ser vazio"
      );
    }

    if (participantWithThisNameExists) {
      return Alert.alert(
        "Participante Existe",
        "Já existe um participante na lista com esse nome"
      );
    }

    const newParticipant: ParticipantInterface = {
      name: newParticipantName,
      id: crypto.randomUUID(),
    };
    setParticipants((prev) => [...prev, newParticipant]);
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
          value={newParticipantName}
          style={styles.input}
        />

        <TouchableOpacity
          onPress={handleAddParticipant}
          disabled={!newParticipantName}
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
        data={participants}
      />
    </SafeAreaView>
  );
};
