import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import colors from "../theme/colors/colors";
import Header from "../components/Header";

export default function Score() {
  return (
    <View style={styles.container}>
      <Header title="" showSettingsIcon={false} showChallengerInfo={true} />
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
          }}
        >
          <Text style={styles.topNumber}>+</Text>
          <View
            style={{
              alignItems: "flex-end",
            }}
          >
            <Text style={styles.topNumber}>10</Text>
            <Text style={styles.bottomNumber}>2</Text>
          </View>
        </View>
        <View style={styles.bottomBorder} />
        <View style={styles.cardContainer}></View>
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
              NEXT
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
  topNumber: {
    fontFamily: "Poppins_400Regular",
    fontSize: 105,
  },
  bottomNumber: {
    fontFamily: "Poppins_400Regular",
    fontSize: 105,
  },
  button: {
    alignItems: "center",
    padding: 16,
    width: "50%",
    backgroundColor: "#36454F",
    borderRadius: 5,
  },
  bottomBorder: {
    alignSelf: "center",
    borderBottomWidth: 3,
    width: "60%",
    borderBottomColor: "#000",
  },
  cardContainer: {
    alignSelf: "center",
    marginTop: 20,
    width: "70%",
    height: "30%",
    borderRadius: 20,
    padding: 20,
    backgroundColor: colors.cardBackground,
    borderWidth: 3,
    borderColor: colors.cardBorder,
  },
});
