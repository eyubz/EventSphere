import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Onboarding from "./screens/onboarding";
import Signup from "./screens/auth/signup";
import Header from "./components/header";
import Login from "./screens/auth/login";
import Verify from "./screens/auth/verify";
import Home from "./screens/main/home";
import AllEvents from "./screens/main/all_events";
import store from "./redux/store";
import { Provider } from "react-redux";

function AuthStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Verify"
        component={Verify}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      {/* <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      /> */}
    </Stack.Navigator>
  );
}

function HomeStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#7F57C4" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
function AllEventsStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#7F57C4" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="AllEvents"
        component={AllEvents}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  const Drawer = createDrawerNavigator();
  const Stack = createNativeStackNavigator();

  const isAuthenticated = true;

  return (
    <Provider store={store}>
      <NavigationContainer>
        {!isAuthenticated ? (
          <Stack.Navigator>
            <Stack.Screen
              name="AuthFlow"
              component={AuthStack}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        ) : (
          <Drawer.Navigator
            // initialRouteName="Home"
            drawerContentOptions={{
              activeTintColor: "#e91e63",
              itemStyle: { marginVertical: 10 },
            }}
          >
            <Drawer.Screen name="EventSphere" component={HomeStack} />
            <Drawer.Screen name="AllEvents" component={AllEventsStack} />
          </Drawer.Navigator>
        )}
      </NavigationContainer>
    </Provider>
  );
}
