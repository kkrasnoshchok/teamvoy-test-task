// #region importing

import { ActivityIndicator, View, StyleSheet, Text } from "react-native";

import { useEffect, useState } from "react";

// importing components
import RestaurantsContainer from "./components/RestaurantsContainer";
import RestaurantDetails from "./components/RestaurantDetails";

// importing react-query
import { QueryClientProvider, QueryClient } from "react-query";

// importing react navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// #region importing styles and fonts
import theme from "./style/style";
const { colors } = theme;
import {
  useFonts,
  Raleway_200ExtraLight,
  Raleway_400Regular,
  Raleway_500Medium,
  Raleway_600SemiBold,
  Raleway_700Bold,
} from "@expo-google-fonts/raleway";
import Loading from "./components/Loading";
// #endregion

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();

// #endregion importing

export default function App() {
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  // loading fonts
  let [fontsLoaded] = useFonts({
    Raleway_200ExtraLight,
    Raleway_400Regular,
    Raleway_500Medium,
    Raleway_600SemiBold,
    Raleway_700Bold,
  });

  !fontsLoaded ? <ActivityIndicator /> : null;

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        {isLoading ? (
          <View style={styles.loadingPage}>
            <Loading title="App Loading" />
          </View>
        ) : (
          <View style={styles.appContainer}>
            <Stack.Navigator initialRouteName="Explorer">
              <Stack.Screen
                name="Explorer"
                component={RestaurantsContainer}
                options={{
                  title: "Restaurants Explorer",
                  headerStyle: {
                    backgroundColor: colors.black,
                  },
                  headerTintColor: colors.yellow,
                  headerTitleStyle: {
                    fontWeight: "bold",
                  },
                }}
              />
              <Stack.Screen
                name="Details"
                component={RestaurantDetails}
                options={{
                  title: "Restaurant Details",
                  headerStyle: {
                    backgroundColor: colors.black,
                  },
                  headerTintColor: colors.yellow,
                  headerTitleStyle: {
                    fontWeight: "bold",
                  },
                }}
              />
            </Stack.Navigator>
          </View>
        )}
      </NavigationContainer>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    maxHeight: "100vh",
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.black,
  },
  loadingPage: {
    height: "100vh",
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.black,
  },
  loadingRocket: {
    width: 30,
    height: 30,
  },
});
