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
const screenWidth = Dimensions.get("window").width;
const { width, height } = Dimensions.get("window");

const imageHeight = Math.min((width * 530) / 375, height * 0.6);
const Onboarding2 = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Get plant <Text style={styles.titleBold}>care guides</Text>
        </Text>
      </View>
      <View style={styles.canvas}>
        <Image source={require("../assets/leaves.png")} style={styles.leaves} />
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/phone2.png")}
            style={styles.image}
          />
          <Image source={require("../assets/icons.png")} style={styles.icons} />
        </View>
      </View>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Continue</Text>
      </TouchableOpacity>
      <View style={styles.pagination}>
        <View style={styles.dot} />
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  canvas: {
    height: imageHeight + 20,
    // borderWidth: 1,
    // borderColor: "black",
    position: "relative",
    overflow: "hidden",
  },
  imageContainer: {
    position: "absolute",
    alignSelf: "center",
    top: "10%",
    resizeMode: "contain",
    width: screenWidth * 0.8,
    // borderWidth: 5,
    // borderColor: "orange",
  },
  image: {
    width: screenWidth * 0.8,
    height: imageHeight + 20,
    // borderWidth: 5,
    // borderColor: "red",
    alignSelf: "center",
    resizeMode: "contain",
  },
  leaves: {
    position: "absolute",
    width: screenWidth,
    height: imageHeight + 20,
    // borderWidth: 1,
    // borderColor: "green",
    resizeMode: "contain",
  },
  icons: {
    position: "absolute",
    width: 220,
    height: 220,
    // borderWidth: 3,
    // borderColor: "yellow",
    resizeMode: "contain",
    top: -75,
    left: 110
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    // borderWidth: 1,
    // borderColor: "black",
    left: 24,
    height: 75,
    // marginBottom: 20,
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
  imageCropContainer: {
    width: screenWidth,
    height: imageHeight * 0.93,
    overflow: "hidden",
    borderRadius: 16,
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
    // borderColor: "black",
    // borderWidth: 1,
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
    // backgroundColor: "green"
  },
});

export default Onboarding2;
