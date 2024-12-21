import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "./screens/onboarding";
import Signup from "./screens/auth/signup";
import Header from "./components/header";
import Login from "./screens/auth/login";
import Verify from "./screens/auth/verify";
import store from "./redux/store";
import { Provider } from "react-redux";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
        // screenOptions={{
        //   headerStyle: { backgroundColor: "#7F57C4" },
        //   headerTintColor: "#fff",
        //   headerTitleStyle: { fontWeight: "bold" },
        // }}
        >
          {/* <Stack.Screen
          name="Welcome to EventSphere"
          component={Onboarding}
          options={{
            headerTitle: () => <Header />,
            headerStyle: {
              backgroundColor: "#7F57C4",
            },
          }}
        /> */}

          {/* <Stack.Screen
            name="Signup"
            component={Signup}
            options={{
              headerShown: false,
            }}
          /> */}
          {/* <Stack.Screen
            name="Verify"
            component={Verify}
            options={{
              headerShown: false,
            }}
          /> */}
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
