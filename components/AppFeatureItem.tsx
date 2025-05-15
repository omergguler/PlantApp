import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { AppFeatureItemProps } from "../types/appFeature";

const originalItemHeight = 130;
const height_width_ratio = 156 / 130;

const screenHeight = Dimensions.get("window").height;
const scaleFactor = screenHeight / 812;

const finalItemHeight = originalItemHeight * scaleFactor;
const finalItemWidth = finalItemHeight * height_width_ratio;

const AppFeatureItem = ({ icon, title, subTitle }: AppFeatureItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>{icon}</View>

      <View style={styles.textsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    // borderColor: "white",
    width: finalItemWidth,
    height: finalItemHeight,
    backgroundColor: "#23302a",
    borderRadius: 14,
    padding: 14,
    justifyContent: "space-between"
  },
  iconContainer: {
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0000003D",
    borderRadius: 8,
  },
  textsContainer: {
    height: 46 * scaleFactor,
    justifyContent: "space-between",
    // borderWidth: 1,
    // borderColor: "white",
  },
  title: {
    fontWeight: "500",
    fontSize: 20 * scaleFactor,
    color: "#FFFFFF",
  },
  subTitle: {
    fontWeight: "400",
    fontSize: 13 * scaleFactor,
    color: "#FFFFFF",
  },
});

export default AppFeatureItem;
