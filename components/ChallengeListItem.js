import { StyleSheet, Text, View } from "react-native";
import colors from "../theme/colors/colors";

export default function ChallengeListItem(props) {
  return (
    <View style={{}}>
      <Text style={styles.subject}>{props.subject}</Text>
      <View>
        <Text style={styles.info}>{props.time}</Text>
        <Text style={styles.info}>{props.countQuestions}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.screenBackground,
  },
  subject: {
    fontFamily: "Poppins_700Bold",
    color: colors.subjectItem,
    fontSize: 20,
  },
  info: {
    fontFamily: "Poppins_400Regular",
    color: colors.subjectInfo,
  },
});
