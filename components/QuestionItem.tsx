import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking  } from "react-native";
import { QuestionItemProps } from "../types/question";
import { Image } from "react-native";
const QuestionItem = ({
  title,
  subtitle,
  image_uri,
  uri,
}: QuestionItemProps) => {
  const handlePress = () => {
    Linking.openURL(uri);
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image source={{ uri: image_uri }} style={styles.image} />
      <View style={styles.questionTextContainer}>
        <Text style={styles.questionText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 240,
    height: 164,
    // borderWidth: 1,
    // borderColor: "black",
    borderRadius: 12,
    overflow: "hidden",
    position: "relative",
    marginRight: 12
  },
  image: {
    width: "100%",
    height: 164,
    resizeMode: "center",
    // borderRadius: 12,
  },
  questionTextContainer: {
    position: "absolute",
    // borderWidth: 1,
    // borderColor: "black",
    bottom: 8,
    left: 0,
    width: 240,
    height: 50,
    paddingHorizontal: 15,
    paddingVertical: 4,
  },
  questionText: {
    fontSize: 15,
    fontWeight: "500",
    position: "relative",
    color: "white",
  },
});

export default QuestionItem;
