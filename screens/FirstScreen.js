import { View, StyleSheet } from "react-native";
import Text from "../components/Text";
import { useState, useContext } from "react";
import IsDarkThemeContext from "../contexts/IsDarkThemeContext";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { useIsFocused } from "@react-navigation/native";

export default FirstScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const { isDarkTheme } = useContext(IsDarkThemeContext);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkTheme ? "#000" : "#fff" },
      ]}
    >
      <Text text={"This is the home screen!"} />
      <TextInput
        value={firstName}
        setValue={setFirstName}
        placeholder={"Enter your first name"}
      />
      <Button
        title="Go to next screen"
        onPress={() => {
          navigation.navigate("Profile", { firstName: firstName });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
