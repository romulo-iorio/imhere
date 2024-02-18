import {
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  FlatList,
  Text,
  View,
} from "react-native";
import { useState } from "react";

import { useParticipants, useParticipantsHandlers } from "../../hooks";
import { Participant } from "../../components";
import { styles } from "./styles";

const EmptyList = () => (
  <Text style={styles.emptyListText}>
    Ninguém chegou no evento ainda? Adicione participantes à sua lista de
    presença.
  </Text>
);

export const Home = () => {
  const [newParticipantName, setNewParticipantName] = useState("");
  const { participants, setParticipants } = useParticipants();

  const { handleAddParticipant, handleRemoveParticipant } =
    useParticipantsHandlers({
      setNewParticipantName,
      newParticipantName,
      setParticipants,
      participants,
    });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Sexta, 16 de fevereiro de 2024</Text>

      <View style={styles.form}>
        <TextInput
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          onChangeText={setNewParticipantName}
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
