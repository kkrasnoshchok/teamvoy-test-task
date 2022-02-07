import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";
import theme from "../style/style";
const { colors, fontSize, spacing } = theme;

const Loading = ({title} : string) => {
  return (
    <View style={styles.loadingPage}>
      <ActivityIndicator />
      <Text style={styles.loadingPageText}>{title}</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  loadingPage: {
    height: "55%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loadingPageText: {
    marginTop: spacing.m,
    color: colors.mint,
    fontSize: fontSize.s,
    fontWeight: "700",
  },
});
