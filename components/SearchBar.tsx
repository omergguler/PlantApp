import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { TextInput } from "react-native";
const SearchBar = () => {
  return (
    <View style={styles.background}>
      <AntDesign
        name="search1"
        size={24}
        color="black"
        style={{ alignSelf: "center", marginHorizontal: 10 }}
      />
      <TextInput
        placeholder="Search for plants"
        style={styles.inputStyle}
        value={""}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#FFFFFFE0",
    height: 50,
    margin: 15,
    flexDirection: "row",
    marginHorizontal: 24,
    borderRadius: 12,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
});

export default SearchBar;
