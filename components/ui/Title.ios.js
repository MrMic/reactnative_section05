import { Text, StyleSheet, Platform } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    // fontWeight: 'bold',
    color: "white",
    textAlign: "center",
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    // borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderWidth: 0,
    // borderRadius: Platform.OS === "android" ? 10 : 6,
    // borderRadius: Platform.select({ ios: 6, android: 10 }),
    borderRadius: 6,
    borderColor: "white",
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
