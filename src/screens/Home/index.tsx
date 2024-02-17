import { Text, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

import { styles } from "./styles";

export const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Sexta, 16 de fevereiro de 2024</Text>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};
