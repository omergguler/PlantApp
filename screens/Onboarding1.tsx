import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/navigationTypes";
const screenWidth = Dimensions.get("window").width;
const { width, height } = Dimensions.get("window");

const imageHeight = Math.min((width * 530) / 375, height * 0.6);
const Onboarding1 = () => {
  type Onboarding1ScreenNavProp = NativeStackNavigationProp<
    RootStackParamList,
    "Onboarding1"
  >;
  const navigation = useNavigation<Onboarding1ScreenNavProp>();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Take a photo to <Text style={styles.titleBold}>identify</Text> the
          plant!
        </Text>
      </View>

      <Image source={require("../assets/phone1.png")} style={styles.image} />
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Onboarding2")}>
        <Text style={styles.btnText}>Continue</Text>
      </TouchableOpacity>
      <View style={styles.pagination}>
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    left: 24,
    height: 75,
  },
  title: {
    fontWeight: "500",
    fontSize: 28,
    color: "#13231B",
  },
  titleBold: {
    fontWeight: "800",
    fontSize: 28,
    color: "#13231B",
  },

  image: {
    width: screenWidth,
    height: imageHeight + 20,
    resizeMode: "contain",
  },
  btn: {
    backgroundColor: "#28AF6E",
    marginHorizontal: 24,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    height: 56,
  },
  btnText: { fontWeight: "700", fontSize: 15, color: "#FFFFFF" },

  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
    alignItems: "center",
    marginTop: 20,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#13231B40",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#13231B",
    width: 10,
    height: 10,
    borderRadius: 5,
  },

  safeArea: {
    flex: 1,
    justifyContent: "center",
  },
});

export default Onboarding1;
