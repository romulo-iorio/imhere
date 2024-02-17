import { Text, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

import { styles } from "./styles";

export const Home = () => {
  const handleAddParticipant = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Sexta, 16 de fevereiro de 2024</Text>

      <TextInput
        placeholder="Nome do participante"
        placeholderTextColor="#6b6b6b"
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
