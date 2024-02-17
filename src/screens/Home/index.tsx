import { Text, SafeAreaView, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";

import { styles } from "./styles";

export const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Sexta, 16 de fevereiro de 2024</Text>

      <TextInput
        placeholder="Nome do participante"
        placeholderTextColor="6b6b6b"
        style={styles.input}
      />
    </SafeAreaView>
  );
};
