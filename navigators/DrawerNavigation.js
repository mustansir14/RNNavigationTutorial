import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import FirstScreen from "../screens/FirstScreen";
import SecondScreen from "../screens/SecondScreen";
import ThirdScreen from "../screens/ThirdScreen";
import { StyleSheet, Text, View, Image } from "react-native";

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label={() => (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/profile.jpg")}
              style={{ height: 80, width: 75 }}
            />
            <Text style={{ margin: 10 }}>Profile</Text>
          </View>
        )}
        onPress={() => {}}
        style={{ height: 100 }}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={CustomDrawerContent}
    >
      <Drawer.Screen name="Home" component={FirstScreen} />
      <Drawer.Screen name="Profile" component={SecondScreen} />
      <Drawer.Screen name="Settings" component={ThirdScreen} />
    </Drawer.Navigator>
  );
};
