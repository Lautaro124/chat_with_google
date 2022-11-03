import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";

export type onChangeinputValue= NativeSyntheticEvent<TextInputChangeEventData>

export const STYLE_WITH_LOGIN_AND_SIGNUP = {
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: "orange",
    alignSelf: "center",
    paddingBottom: 24,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff'
  },
  text: {
    color: 'gray',
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'center',
  },
  registerRedirectionContainer: {
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
}