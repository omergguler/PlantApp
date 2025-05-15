import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import AppFeatureItem from "../components/AppFeatureItem";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
const { width, height } = Dimensions.get("window");
const imageHeight = width * (980 / 750);
{/* <AntDesign name="scan1" size={24} color="black" /> */}
const PaywallScreen = () => {
  return (
    <View style={styles.container}>
      
      <ImageBackground
        source={require("../assets/plant2.png")}
        style={styles.image}
      >
        <View style={styles.titlesContainer}>
          <Text style={styles.titleBold}>
            PlantApp <Text style={styles.title}>Premium</Text>
          </Text>
          <Text style={styles.subTitle}>Access All Features</Text>
        </View>
        <View style={styles.featuresContainer}>
            <AppFeatureItem icon={<MaterialCommunityIcons name="speedometer" size={24} color="white" />} title={"Unlimited"} subTitle={"Plant Identify"} />
        </View>
      </ImageBackground>
      <View style={styles.plansContainer}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  featuresContainer: {
    // position: "absolute",
    // backgroundColor: "red",
    // bottom: 0,
    // left: 0,
  },
  titlesContainer: {
    marginLeft: 24,
    borderWidth: 1,
    borderColor: "white",
  },
  titleBold: {
    fontWeight: "800",
    fontSize: 30,
    color: "#FFFFFF",
  },
  title: {
    fontWeight: "300",
    fontSize: 27,
  },
  subTitle: {
    fontWeight: "300",
    fontSize: 17,
    color: "#FFFFFF",
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: width,
    height: imageHeight,
    justifyContent: "flex-end"
    // borderWidth: 1,
    // borderColor: "white",
  },
  plansContainer: {
    backgroundColor: "#101e17",
    flex: 1,
    borderWidth: 1,
    borderColor: "white",
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
});

export default PaywallScreen;
