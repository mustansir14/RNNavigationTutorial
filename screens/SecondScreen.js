import { View, StyleSheet } from "react-native";
import Text from "../components/Text";
import { useState } from "react";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import { useContext } from "react";
import IsDarkThemeContext from "../contexts/IsDarkThemeContext";

export default SecondScreen = ({ route, navigation }) => {
  const [lastName, setLastName] = useState("");
  const { isDarkTheme } = useContext(IsDarkThemeContext);
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkTheme ? "#000" : "#fff" },
      ]}
    >
      <Text text={"This is the profile screen."} />
      <Text text={"Hello " + route?.params?.firstName + "!"} />
      <TextInput
        placeholder="Enter your last name"
        value={lastName}
        setValue={setLastName}
      />
      <Button
        title="Go to next screen"
        onPress={() => {
          navigation.navigate("Settings", {
            firstName: route?.params?.firstName,
            lastName: lastName,
          });
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
