// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./components/Welcome";
import Home from "./components/Home";
import Code from "./components/Code";
import Edu from "./components/Education";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            title: "Welcome",
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Personal Detail",
          }}
        />
                <Stack.Screen
          name="Edu"
          component={Edu}
          options={{
            title: "Education",
          }}
        />
                <Stack.Screen
          name="Code"
          component={Code}
          options={{
            title: "Source code",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
