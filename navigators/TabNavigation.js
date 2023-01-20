import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import FeatherIcon from "react-native-vector-icons/Feather";
import FirstScreen from "../screens/FirstScreen";
import SecondScreen from "../screens/SecondScreen";
import ThirdScreen from "../screens/ThirdScreen";

export default TabNavigation = () => {
  const Tab = createBottomTabNavigator();

  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      if (route.name === "Settings")
        return <FeatherIcon name={"settings"} size={size} color={color} />;
      return (
        <AntDesignIcon
          name={route.name.toLowerCase()}
          size={size}
          color={color}
        />
      );
    },
  });

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={FirstScreen} />
      <Tab.Screen name="Profile" component={SecondScreen} />
      <Tab.Screen
        name="Settings"
        component={ThirdScreen}
        options={{ tabBarBadge: 1 }}
      />
    </Tab.Navigator>
  );
};
