import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: '#fff',
  },
  background: {
    position: 'absolute',

    transform: [{ rotate: '360deg' }],
    top: 0,
    bottom: 0,

    right: -110,

},
  textSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textTitle: {
    fontFamily: "Poppins_500Medium",
    fontSize: 48,
    color: "#000",
    backgroundColor: 'transparent',
    textAlign: "center",
  },
  textDescription: {
    fontFamily: "Poppins_400Regular",
    fontSize: 18,
    color: "#717E95",
    backgroundColor: 'transparent',
    textAlign: "center",
    marginHorizontal: 20,
  },
  logo: {
    width: 48,
    height: 48,
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
    justifyContent: "flex-end",
    fontFamily: "Poppins_500Medium",
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
  },
});
