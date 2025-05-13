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
import { RFValue } from "react-native-responsive-fontsize";
const screenWidth = Dimensions.get("window").width;
const { width, height } = Dimensions.get("window");

const imageHeight = Math.min((width * 510) / 375, height * 0.6);
const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topTextsContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Welcome to <Text style={styles.titleBold}>PlantApp</Text>
          </Text>
        </View>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>
            Identify more than 3000+ plants and 88% accuracy.
          </Text>
        </View>
      </View>

      <Image source={require("../assets/plant.png")} style={styles.image} />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Get Started</Text>
      </TouchableOpacity>
      <Text style={styles.footer}>
        By tapping next, you are agreeing to PlantID Terms of Use & Privacy
        Policy.
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topTextsContainer: {
    height: 75,
    justifyContent: "space-between",
    marginBottom: 20
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    // borderWidth: 1,
    // borderColor: "black",
    left: 24,
  },
  title: {
    fontWeight: "400",
    fontSize: 28,
    color: "#13231B",
  },
  titleBold: {
    fontWeight: "600",
    fontSize: 28,
    color: "#13231B",
  },
  subTitleContainer: {
    width: "80%",
    left: 24,
    // borderWidth: 1,
    // borderColor: "black",
  },
  subTitle: {
    alignSelf: "center",
    color: "#13231BB2",
    fontWeight: "400",
    fontSize: 16,
  },
  image: {
    width: screenWidth,
    height: imageHeight,
    // borderColor: "black",
    // borderWidth: 1,
    // alignSelf: "center",
    resizeMode: "contain"
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
  footer: {
    fontWeight: "400",
    fontSize: 11,
    width: "70%",
    textAlign: "center",
    alignSelf: "center",
    marginTop: 20,
  },
  safeArea: {
    flex: 1,
    justifyContent: "center",
    // backgroundColor: "green"
  },
});

export default WelcomeScreen;
