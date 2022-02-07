// #region importing
import { Pressable, StyleSheet, Text, View } from "react-native";

// #region importing styles and fonts
import theme from "../style/style";
import { AntDesign } from "@expo/vector-icons";
import { FC } from "react";
import { useNavigation } from "@react-navigation/native";
const { colors, fontSize, spacing } = theme;
// #endregion

// #endregion importing
const RestaurantsCard: FC = ({ restaurant }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.restaurantCard}
      onPress={() =>
        navigation.navigate("Details", {
          id: restaurant.fsq_id,
        })
      }
    >
      <View style={styles.restaurantInfo}>
        <Text style={styles.restaurantTitle}>{restaurant.name}</Text>
        <View style={styles.restaurantInfoWrapper}>
          <Text style={styles.restaurantAddress}>Address : </Text>
          <Text style={styles.restaurantAddressTitle}>
            {restaurant.location.address} - {restaurant.location.locality}
          </Text>
        </View>
        <View style={styles.restaurantInfoWrapper}>
          <Text style={styles.restaurantCategory}>Category : </Text>
          <Text style={styles.restaurantCategoryTitle}>
            {restaurant.categories[0].name}
          </Text>
        </View>
      </View>
      <View>
        <Pressable
          onPress={() =>
            navigation.navigate("Details", {
              id: restaurant.fsq_id,
            })
          }
        >
          <AntDesign
            name="rightcircleo"
            size={fontSize.l}
            color={colors.blue_dark}
          />
        </Pressable>
      </View>
    </Pressable>
  );
};

// #region styles
const styles = StyleSheet.create({
  restaurantCard: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: spacing.s,
    marginVertical: spacing.s,
    // border
    borderBottomWidth: 1,
    borderRadius: spacing.s / 2,
    borderColor: colors.grey_dark,
  },
  restaurantInfo: {
    width: "90%",
  },
  restaurantInfoWrapper: {
    marginVertical: spacing.s / 5,
    maxWidth: "90%",
    display: "flex",
    flexDirection: "row",
  },
  restaurantTitle: {
    marginBottom: spacing.s,
    fontSize: fontSize.s + 8,
    fontFamily: "Raleway_600SemiBold",
    color: colors.white,
  },
  restaurantAddress: {
    color: colors.blue,
    fontFamily: "Raleway_700Bold",
  },
  restaurantAddressTitle: {
    color: colors.white,
    fontFamily: "Raleway_600SemiBold",
  },
  restaurantCategory: {
    color: colors.yellow,
    fontFamily: "Raleway_700Bold",
  },
  restaurantCategoryTitle: {
    color: colors.white,
    fontFamily: "Raleway_600SemiBold",
  },
});

// #endregion

export default RestaurantsCard;
