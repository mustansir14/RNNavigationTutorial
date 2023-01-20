import { TextInput as NativeTextInput, StyleSheet } from "react-native";
import { useContext } from "react";
import IsDarkThemeContext from "../contexts/IsDarkThemeContext";

export default TextInput = ({ value, setValue, placeholder }) => {
  const { isDarkTheme } = useContext(IsDarkThemeContext);

  const textColor = isDarkTheme ? "#fff" : "#000";
  const themeStyle = { borderColor: textColor, color: textColor };

  return (
    <NativeTextInput
      value={value}
      onChangeText={setValue}
      placeholder={placeholder}
      style={[styles.textInput, themeStyle]}
      placeholderTextColor={isDarkTheme ? "#fff" : "#000"}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    padding: 5,
  },
});
