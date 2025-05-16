import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { CategoryItemProps } from "../types/categories";
import { Dimensions } from "react-native";
import { Image } from "react-native";
const screenWidth = Dimensions.get("window").width;
let imageWidth = (screenWidth - 48 - 24) / 2;
const CategoryItem = ({ title, image }: CategoryItemProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image.url }} style={styles.image} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: imageWidth,
    height: imageWidth,
    borderRadius: 12,
    resizeMode: "cover",
    marginBottom: 24,
    position: "relative",
  },
  image: {
    width: imageWidth,
    height: imageWidth,
    borderRadius: 12,
  },
  titleContainer: {
    width: imageWidth / 2 + 40,
    position: "absolute",
    top: 8,
    left: 8,
  },
  title: {
    position: "relative",
    fontWeight: "500",
    fontSize: 16,
    color: "#13231B",
  },
});

export default CategoryItem;
