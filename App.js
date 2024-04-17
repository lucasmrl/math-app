import { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import colors from "./theme/colors/colors";
import Header from "./components/Header";
import ChallengeListItem from "./components/ChallengeListItem";

SplashScreen.preventAutoHideAsync();

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Lato_400Regular,
    Lato_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  function ChallengeListItem(props) {
    return (
      <View style={{}}>
        <Text>{props.subject}</Text>
        <View>
          <Text>{props.time}</Text>
          <Text>{props.countQuestions}</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Header title="Math" showSettingsIcon={true} />
      <View style={styles.screenContainer}>
        <Text style={styles.categoryTitle}>Challenges</Text>
        <ScrollView style={styles.cardContainer}>
          <ChallengeListItem
            subject="Addition"
            time="5 min"
            countQuestions="100 Questions"
          />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.screenBackground,
  },
  screenContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: 30,
  },
  categoryTitle: {
    alignSelf: "flex-start",
    paddingLeft: 30,
    fontFamily: "Poppins_600SemiBold",
    fontSize: 16,
    color: colors.screenCategoryTitle,
  },
  cardContainer: {
    marginTop: 16,
    flexGrow: 0,
    width: "85%",
    height: "85%",
    borderRadius: 25,
    padding: 20,
    backgroundColor: colors.cardBackground,
    borderWidth: 3,
    borderColor: colors.cardBorder,
  },
});
