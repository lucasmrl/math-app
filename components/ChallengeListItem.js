import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import colors from "../theme/colors/colors";

export default function ChallengeListItem(props) {
  function onPressFunction() {
    console.log("1");
  }

  return (
    <Link href="/score" asChild>
      <TouchableOpacity onPress={onPressFunction}>
        <Text style={styles.subject}>{props.subject}</Text>
        <View style={styles.infoLine}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialCommunityIcons
              name="timer-outline"
              size={20}
              color="black"
            />
            <Text style={styles.info}>{props.time}</Text>
          </View>
          <Text style={styles.info}>
            |{"    "}
            {props.countQuestions}
          </Text>
        </View>
        <View style={styles.bottomBorder} />
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.screenBackground,
  },
  infoLine: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  subject: {
    fontFamily: "Poppins_700Bold",
    color: colors.subjectItem,
    fontSize: 20,
    paddingBottom: 4,
  },
  info: {
    fontFamily: "Poppins_400Regular",
    color: colors.subjectInfo,
    paddingLeft: 4,
  },
  bottomBorder: {
    paddingTop: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#EDEADE",
  },
});
