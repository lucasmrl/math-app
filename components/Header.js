import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../theme/colors/colors";

export default function Header(props) {
  if (props.showChallengerInfo) {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.challengerHeaderText}>1/100</Text>
          <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              name="timer-outline"
              size={20}
              color={colors.headerQuestionsCounter}
            />
            <Text style={styles.challengerHeaderText}>4:56</Text>
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>{props.title}</Text>
          {props.showSettingsIcon ? (
            <Feather name="settings" size={24} color="black" />
          ) : null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 90,
  },
  headerContainer: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "Poppins_700Bold",
    fontSize: 40,
    color: colors.screenMainTile,
  },
  challengerHeaderText: {
    fontFamily: "Lato_400Regular",
    fontSize: 18,
    color: colors.headerQuestionsCounter,
  },
});
