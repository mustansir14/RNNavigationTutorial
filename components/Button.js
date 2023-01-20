import { Button as NativeButton } from "react-native";
import { useContext } from "react";
import IsDarkThemeContext from "../contexts/IsDarkThemeContext";

export default Button = ({ title, onPress }) => {
  const { isDarkTheme } = useContext(IsDarkThemeContext);
  return (
    <NativeButton
      title={title}
      onPress={onPress}
      color={isDarkTheme ? "#00008B" : "#2196F3"}
    />
  );
};
