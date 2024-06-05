import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    padding: 32,
    justifyContent: "space-between",
  },
  description: {
    fontFamily: "Poppins_500Medium",
    fontSize: 18,
    color: "#717E95",
    textAlign: "left",
    marginBottom: 12,
  },
  title: {
    fontSize: 36,
    textAlign: "left",
    fontFamily: "Poppins_500Medium",
  
  },
  containerRegister: {
    gap: 30,
  },
  bold: {
    fontWeight: "600",
  },
  loginWithServices: {
    flexDirection: "row",
    width: "100%",
    gap: 10,
    justifyContent: "center",
  },
  loginWithServicesButton: {},
  textMethods: {
    marginTop: 24,
    textAlign: "center",
    color: "#717E95",
  },
  TextNotHaveAccountText: {
    marginTop: 20,
    textAlign: "center",
  },
  TextForgotPassword: {
    fontSize: 14,
    marginTop: 12,
    color: "#717E95",
    textAlign: "right",
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

  buttonText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
  },
  buttonTextNotHaveAccount: {
    fontFamily: "Poppins_500Medium",
    fontSize: 18,
    color: "#000",
    textAlign: "center",
  },
  buttonNotHaveAccountText: {
    marginTop: 20,
    fontFamily: "Poppins_500Medium",
    fontSize: 18,
    padding: 16,
    color: "#000",
    backgroundColor: "white",
    textAlign: "center",
    borderRadius: 12,
    borderColor: "rgba(192, 192, 192, 0.3)",
    borderWidth: 1,
    shadowColor: "rgba(192, 192, 192, 0.9)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 26.27,

    elevation: 10,
  },
});
