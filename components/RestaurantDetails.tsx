// #region importing
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
// importing react-navigation
import { useRoute } from "@react-navigation/native";
// importing react-query
import { useQuery } from "react-query";
// importing my service
import restaurantsApi from "../service/restaurant";
// importing my components
import Loading from "./Loading";
// importing styles
import theme from "../style/style";

// #endregion importing

const { colors, fontSize, spacing } = theme;

const RestaurantDetails: FC = () => {
  // #region logic
  const route = useRoute();
  const { id } = route.params;

  const { data, status, isFetching } = useQuery("specificRestaurant", () =>
    restaurantsApi.getSpecificRestaurant(id)
  );
  // #endregion logic

  // #region returning jsx
  return (
    <>
      {status === "loading" ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.restaurantDetails}>
          {isFetching ? (
            <Loading title="Loading Restaurant Details" />
          ) : (
            <>
              <View style={[styles.restaurantNameWrapper, styles.text]}>
                <Text>
                  <Text style={[styles.text, styles.restaurantName]}>
                    Name :{" "}
                  </Text>
                  <Text style={[styles.text, styles.restaurantNameTitle]}>
                    {data.name}
                  </Text>
                </Text>
              </View>
              <View style={[styles.restaurantCategoryWrapper, styles.text]}>
                <Text>
                  <Text style={[styles.text, styles.restaurantCategory]}>
                    Category :
                  </Text>
                  <Text style={[styles.text, styles.restaurantCategoryTitle]}>
                    {data.categories[0].name}
                  </Text>
                </Text>
              </View>
              <View style={[styles.restaurantLocationWrapper, styles.text]}>
                <Text>
                  <Text style={[styles.text, styles.restaurantLocation]}>
                    City :{" "}
                  </Text>
                  <Text style={[styles.text, styles.restaurantLocationTitle]}>
                    {data.location.locality}
                  </Text>
                </Text>
                <Text>
                  <Text style={[styles.text, styles.restaurantLocation]}>
                    Neighborhood :{" "}
                  </Text>
                  <Text style={[styles.text, styles.restaurantLocationTitle]}>
                    {!data.location.neighborhood
                      ? "no neighborhood found"
                      : data.location.neighborhood}{" "}
                  </Text>
                </Text>
                <Text>
                  <Text style={[styles.text, styles.restaurantLocation]}>
                    Street :{" "}
                  </Text>
                  <Text style={[styles.text, styles.restaurantLocationTitle]}>
                  {!data.location.address
                      ? "address not found:("
                      : data.location.address}{" "}
                  </Text>
                </Text>
              </View>
            </>
          )}
        </View>
      )}
    </>
  );
  // #endregion returning jsx
};

export default RestaurantDetails;

// #region styles
const styles = StyleSheet.create({
  restaurantDetails: {
    height: "100%",
    display: "flex",
    padding: spacing.m,
    backgroundColor: colors.black,
  },
  text: {
    fontSize: fontSize.m,
    color: colors.black,
    padding: spacing.m,
  },
  restaurantNameWrapper: {
    backgroundColor: colors.white,
    borderTopLeftRadius: spacing.s,
    borderTopRightRadius: spacing.s,
  },
  restaurantName: {
    color: colors.blue_dark,
    fontWeight: "600",
  },
  restaurantNameTitle: {
    color: colors.black,
  },
  restaurantCategoryWrapper: {
    backgroundColor: colors.white,
  },
  restaurantCategory: {
    color: colors.blue_dark,
    fontWeight: "600",
  },
  restaurantCategoryTitle: {
    color: colors.black,
  },
  restaurantLocationWrapper: {
    backgroundColor: colors.white,
    borderBottomLeftRadius: spacing.s,
    borderBottomRightRadius: spacing.s,
  },
  restaurantLocation: {
    color: colors.blue_dark,
    fontWeight: "600",
  },
  restaurantLocationTitle: {
    color: colors.black,
  },
});
// #endregion styles
