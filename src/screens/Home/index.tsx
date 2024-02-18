import {
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  FlatList,
  Text,
  View,
} from "react-native";

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
  const handleAddParticipant = () => {
    console.log("Adicionando participante");
  };

  const handleRemoveParticipant = (participant: ParticipantInterface) => {
    console.log(`Removendo participante ${participant.name}`);
  };

  return (
    <SafeAreaView style={styles.container}>
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
