import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import colors from "../theme/colors/colors";
import Header from "../components/Header";

export default function Score() {
  return (
    <View style={styles.container}>
      <Header title="Score" showSettingsIcon={false} />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={styles.scorePercentage}>100%</Text>
        <Text style={styles.scoreMsg}>Congrats!</Text>
      </View>
      <View
        style={{
          paddingBottom: 100,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link href="/" asChild>
          <TouchableOpacity style={styles.button}>
            <Text
              style={{
                color: "#FFF",
                fontFamily: "Lato_700Bold",
                fontSize: 20,
              }}
            >
              HOME
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.screenBackground,
  },
  scorePercentage: {
    fontFamily: "Poppins_700Bold",
    fontSize: 80,
    paddingBottom: 4,
  },
  scoreMsg: {
    fontFamily: "Poppins_700Bold",
    fontSize: 40,
    paddingBottom: 4,
  },
  button: {
    alignItems: "center",
    padding: 16,
    width: "50%",
    backgroundColor: "#36454F",
    borderRadius: 5,
  },
});
