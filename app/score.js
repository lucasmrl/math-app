import { StyleSheet, Text, View } from "react-native";
import colors from "../theme/colors/colors";
import Header from "../components/Header";

export default function Score() {
  return (
    <View style={styles.container}>
      <Header title="Score" showSettingsIcon={false} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.screenBackground,
  },
});
