import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import HomeScreen from "../screens/home";
import AuthenticationScreen from "../screens/authentication";
import ResetPassword from "../screens/authentication/reset-password";
import NewPassword from "../screens/authentication/reset-password/new-password";
import Register from "../screens/authentication/register";
import { Header } from "../shared/components/header/header";
import Homefoda from "../screens/super-app";


declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Authentication: undefined;
      ResetPassword: undefined;
      Homefoda: undefined;
      NewPassword: undefined;
      Register: undefined;
    }
  }
}

const Stack = createStackNavigator();

export const Routes = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => <Header />,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      >

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
          <Stack.Screen
          name="Homefoda"
          component={Homefoda}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="NewPassword"
          component={NewPassword}
        />
        <Stack.Screen
          name="Authentication"
          component={AuthenticationScreen}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
        />
        <Stack.Screen
          name="Register"
          component={Register}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
