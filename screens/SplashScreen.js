import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  // the fonts i want to use
  let [fontsLoaded] = useFonts({
    "fira-bold": require("../assets/fonts/FiraMono-Bold.ttf"),
    "fira-regular": require("../assets/fonts/FiraMono-Regular.ttf"),
    "fira-medium": require("../assets/fonts/FiraMono-Medium.ttf"),
  });

  // pick the navigation hook
  const navigation = useNavigation();

  // picking the apps from the network
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    const move = () => navigation.replace("Login");
    setTimeout(move, 5000);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Maestro Keep</Text>
      <Text style={styles.subtitle}>version 1.0 Beta</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#151216",
  },
  title: {
    fontFamily: "fira-bold",
    fontSize: 40,
    color: "#fff",
    lineHeight: 40,
  },
  subtitle: {
    color: "#fff",
    fontFamily: "fira-regular",
  },
});
