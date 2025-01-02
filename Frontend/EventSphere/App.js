import React, { useContext } from "react";
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
import EventDetail from "./screens/main/event_detail";
import Profile from "./screens/organizer/profile";
import UploadEvents from "./screens/organizer/uploadEvents";
import { AuthProvider, AuthContext } from "./context/authContext";
import { EventProvider } from "./context/eventContext";
import UploadedEvents from "./screens/organizer/uploadedEvents";

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
      <Stack.Screen
        name="AllEvents"
        component={AllEvents}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EventDetail"
        component={EventDetail}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function AppNavigator() {
  const { authState } = useContext(AuthContext);
  // const { loginSuccess } = authState;

  const loginSuccess = true;
  const isOrganizer = true;

  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      {!loginSuccess ? (
        <AuthStack />
      ) : (
        <Drawer.Navigator
          drawerContentOptions={{
            activeTintColor: "#e91e63",
            itemStyle: { marginVertical: 10 },
          }}
        >
          {!isOrganizer ? (
            <Drawer.Screen name="EventSphere" component={HomeStack} />
          ) : (
            <>
              {/* <Drawer.Screen name="Home" component={HomeStack} />
              <Drawer.Screen name="Profile" component={Profile} />
              <Drawer.Screen name="UploadEvents" component={UploadEvents} /> */}
              <Drawer.Screen name="UploadedEvents" component={UploadedEvents} />
            </>
          )}
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <EventProvider>
        <AppNavigator />
      </EventProvider>
    </AuthProvider>
  );
}
