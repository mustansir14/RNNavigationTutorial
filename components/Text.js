import { Text as DefaultText, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useContext } from "react";
import IsDarkThemeContext from "../contexts/IsDarkThemeContext";

SplashScreen.preventAutoHideAsync();

export default Text = ({ text, fontSize = 20 }) => {
  const [fontsLoaded] = useFonts({
    LaBelleAurore: require("../assets/fonts/LaBelleAurore-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const { isDarkTheme } = useContext(IsDarkThemeContext);
  return (
    <DefaultText
      style={[
        styles.textStyle,
        { color: isDarkTheme ? "#fff" : "#000", fontSize: fontSize },
      ]}
      onLayout={onLayoutRootView}
    >
      {text}
    </DefaultText>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    // fontFamily: "LaBelleAurore",
  },
});
