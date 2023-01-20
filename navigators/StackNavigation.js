import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstScreen from "../screens/FirstScreen";
import SecondScreen from "../screens/SecondScreen";
import ThirdScreen from "../screens/ThirdScreen";
import { useContext } from "react";
import ThemeContext from "../contexts/IsDarkThemeContext";
import SwitchThemeButton from "../components/SwitchThemeButton";

export default StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  const { isDarkTheme } = useContext(ThemeContext);

  const headerStyle = {
    backgroundColor: isDarkTheme ? "#000" : "#fff",
  };
  const headerTintColor = isDarkTheme ? "#fff" : "#000";

  const makeHeaderOptions = (title) => {
    return {
      title: title,
      headerStyle: headerStyle,
      headerTintColor: headerTintColor,
    };
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={FirstScreen}
        options={{
          ...makeHeaderOptions("First"),
          headerRight: () => <SwitchThemeButton />,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={SecondScreen}
        options={makeHeaderOptions("Second")}
      />
      <Stack.Screen
        name="Settings"
        component={ThirdScreen}
        options={makeHeaderOptions("Third")}
      />
    </Stack.Navigator>
  );
};
