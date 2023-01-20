import { View, Switch, StyleSheet } from "react-native";
import Text from "./Text";
import { useContext } from "react";
import IsDarkThemeContext from "../contexts/IsDarkThemeContext";

export default SwitchThemeButton = () => {
  const { isDarkTheme, setIsDarkTheme } = useContext(IsDarkThemeContext);
  return (
    <View style={styles.container}>
      <Text text={"Dark Mode"} fontSize={15} />
      <Switch
        value={isDarkTheme}
        onValueChange={() => setIsDarkTheme(!isDarkTheme)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
