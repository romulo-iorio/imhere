import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Nome do evento</Text>

      <Text style={styles.date}>Sexta, 16 de fevereiro de 2024</Text>

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
  title: {
    textAlign: "center",
    color: "#fdfcfe",
    fontWeight: "bold",
    marginTop: 48,
    fontSize: 24,
  },
  date: {
    color: "#fdfcfe",
    fontSize: 16,
  },
});

export default App;
