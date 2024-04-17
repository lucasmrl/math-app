import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "../theme/colors/colors";

export default function Header(props) {
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
});
