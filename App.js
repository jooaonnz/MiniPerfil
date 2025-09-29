import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";

import PageFirst from "./screens/PageFirst";
import PageHome from "./screens/PageHome";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="PageFirst">
          <Stack.Screen
            name="PageFirst"
            component={PageFirst}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PageHome"
            component={PageHome}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
