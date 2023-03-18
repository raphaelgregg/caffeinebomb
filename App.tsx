import { StatusBar } from "react-native";
import {ThemeProvider} from "styled-components";
import {useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import {Lexend_600SemiBold, Lexend_700Bold } from '@expo-google-fonts/lexend';

import { SignIn } from "@screens/SignIn";
import { Loading } from "@components/Loading";

import theme from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({ 
    Inter_400Regular, 
    Lexend_600SemiBold, 
    Lexend_700Bold
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <SignIn /> : <Loading />}
    </ThemeProvider>
  );
}
