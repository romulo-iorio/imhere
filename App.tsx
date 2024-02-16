import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Sexta, 16 de fevereiro de 2024</Text>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#131016",
    flex: 1,
    padding: 24,
  },
  eventName: {
    textAlign: "center",
    color: "#fdfcfe",
    fontWeight: "bold",
    marginTop: 48,
    fontSize: 24,
  },
  eventDate: {
    color: "#fdfcfe",
    fontSize: 16,
  },
});

export default App;
