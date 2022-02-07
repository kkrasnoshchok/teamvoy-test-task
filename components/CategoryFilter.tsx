// #region importing
import { StyleSheet, Text, View } from "react-native";
import { FC } from "react";
import { Picker } from "@react-native-picker/picker";

// #region importing styles and fonts
import theme from "../style/style";
const { colors, fontSize, spacing } = theme;
// #endregion

// #endregion importing

const CategoryFilter: FC = ({ selectedCategory, setSelectedCategory }) => {
  // #region returning jsx
  return (
    <View style={styles.restaurantFilter}>
      <Text style={styles.restaurantTitle}>Categories Filter</Text>
      <Picker
        style={styles.restaurantPicker}
        selectedValue={selectedCategory}
        onValueChange={(itemValue) => {
          setSelectedCategory(itemValue);
        }}
      >
        <Picker.Item label="All Categories" value="13065" />
        <Picker.Item label="Fast Food Restaurant" value="13145" />
        <Picker.Item label="Modern European Restaurant" value="13310" />
        <Picker.Item label="Caucasian Restaurant" value="13098" />
        <Picker.Item label="Vegan and Vegetarian Restaurant" value="13377" />
      </Picker>
    </View>
  );
  // #endregion returning jsx
};

// #region styles
const styles = StyleSheet.create({
  restaurantFilter: {
    backgroundColor: colors.white,
  },
  restaurantPicker: {
    backgroundColor: colors.yellow_light_opacity,
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

export default CategoryFilter;
