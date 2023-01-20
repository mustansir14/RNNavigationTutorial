import { View, StyleSheet } from "react-native";
import Text from "../components/Text";
import { useContext } from "react";
import IsDarkThemeContext from "../contexts/IsDarkThemeContext";

export default ThirdScreen = ({ route, navigation }) => {
  const { isDarkTheme } = useContext(IsDarkThemeContext);
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkTheme ? "#000" : "#fff" },
      ]}
    >
      <Text text={"This is the settings screen"} />
      <Text
        text={
          "Hello " +
          route?.params?.firstName +
          " " +
          route?.params?.lastName +
          "!"
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
