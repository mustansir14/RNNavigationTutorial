import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigation from "./navigators/DrawerNavigation";
import StackNavigation from "./navigators/StackNavigation";
import TabNavigation from "./navigators/TabNavigation";
import { IsDarkThemeProvider } from "./contexts/IsDarkThemeContext";
import { useState } from "react";

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  return (
    <IsDarkThemeProvider value={{ isDarkTheme, setIsDarkTheme }}>
      <NavigationContainer>
        {/* <TabNavigation /> */}
        {/* <DrawerNavigation /> */}
        <StackNavigation />
      </NavigationContainer>
    </IsDarkThemeProvider>
  );
}
