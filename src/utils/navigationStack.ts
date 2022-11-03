import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  chat: undefined,
  login: undefined,
  signup: undefined,
  home: undefined,
};

export type StackNavigationProps = StackNavigationProp<RootStackParamList>;

export const Stack = createStackNavigator<RootStackParamList>()