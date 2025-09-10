import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: "#c17f00",
      },
      headerTintColor: "#000000",
      headerTitleStyle: {
        fontWeight: "bold",
      },statusBarStyle: "light",
    }}
       />;
}
