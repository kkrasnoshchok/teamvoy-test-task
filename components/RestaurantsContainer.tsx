// #region importing
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { FC, useState } from "react";
import { Picker } from "@react-native-picker/picker";

// importing my service
import restaurantsApi from "../service/restaurant";

// importing my components
import RestaurantsCard from "./RestaurantCard";
import CategoryFilter from "./CategoryFilter";
import Loading from "./Loading";

// importing react-query
import { useQuery } from "react-query";

// #region importing styles and fonts
import theme from "../style/style";
const { colors, fontSize, spacing } = theme;
// #endregion

// #endregion importing
const RestaurantsContainer: FC = () => {
  // #region logic
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const { data, status, isFetching } = useQuery(
    ["todos", selectedCategory],
    () => restaurantsApi.filterRestaurantsByCategory(selectedCategory)
  );
  // #endregion

  // #region returning jsx
  return (
    <View style={styles.restaurantContainer}>
      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Text style={styles.restaurantTitle}>Restaurants List</Text>
      {status === "loading" || isFetching ? (
        <Loading title="Restaurant List Loading..." />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.fsq_id}
          renderItem={({ item }) => <RestaurantsCard restaurant={item} />}
        />
      )}
    </View>
  );
  // #endregion
};

// #region styles
const styles = StyleSheet.create({
  restaurantContainer: {
    backgroundColor: colors.black,
    width: "100vw",
    height: "auto",
    overflow: "scroll",
    padding: spacing.s / 2,
  },
  restaurantTitle: {
    paddingVertical: spacing.m,
    backgroundColor: colors.yellow_dark,
    color: colors.black,
    fontWeight: "700",
    fontSize: fontSize.m,
    textAlign: "center",
  },
});

// #endregion

export default RestaurantsContainer;
