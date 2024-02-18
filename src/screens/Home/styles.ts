import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#131016",
    padding: 24,
    flex: 1,
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
  input: {
    backgroundColor: "#1f1e25",
    color: "#fff",
    height: 56,
    borderRadius: 5,
    padding: 16,
    fontSize: 16,
    flex: 1,
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31cf67",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 42,
    marginTop: 36,
    gap: 12,
  },
  emptyListText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 14,
  },
});
