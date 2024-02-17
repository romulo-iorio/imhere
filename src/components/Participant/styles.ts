import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 5,
    gap: 12,
  },
  nameContainer: {
    backgroundColor: "#1f1e25",
    justifyContent: "center",
    height: 56,
    flex: 1,
  },
  name: {
    color: "#fff",
    marginLeft: 16,
    fontSize: 16,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#e23c44",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
});
