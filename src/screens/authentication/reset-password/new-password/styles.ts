import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    padding: 32,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 28,
    textAlign: "left",
    fontFamily: "Poppins_500Medium",
    marginBottom: 10,
    marginTop: 25,
  },

  buttonText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
  },

  containerRegister: {
    gap: 10,
    marginTop: 12
  },
  button: {
    marginTop: 20,
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1B1C1D",
    borderRadius: 12,
  },

  description: {
    fontFamily: "Poppins_500Medium",
    fontSize: 18,
    color: "#717E95",
    textAlign: "left",
  },

});
