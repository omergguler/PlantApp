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
  FlatList,
} from "react-native";
import { useState } from "react";
import AppFeatureItem from "../components/AppFeatureItem";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";
import { LinearGradient } from "expo-linear-gradient";
const { width, height } = Dimensions.get("window");
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/navigationTypes";
import { useDispatch } from "react-redux";
import { completeOnboarding } from "../services/userSlice";
import { CommonActions } from "@react-navigation/native";

// pre-determined sizes for smal screens
let buttonHeight = 56;
let lastBtnAndFooterContainerPadding = 2;
let buttonMargins = 10;

if (height > 800) {
  // big screens
  buttonHeight = 84;
  lastBtnAndFooterContainerPadding = 24;
  buttonMargins = 20;
}
const imageHeight = width * (980 / 750); //490
const featuresData = [
  {
    icon: <MaterialCommunityIcons name="speedometer" size={24} color="white" />,
    title: "Unlimited",
    subTitle: "Plant Identify",
  },
  {
    icon: <AntDesign name="scan1" size={24} color="white" />,
    title: "Faster",
    subTitle: "Process",
  },

  {
    icon: <Entypo name="leaf" size={24} color="white" />,
    title: "Detailed",
    subTitle: "Plant Care",
  },
];

const PaywallScreen = () => {
  type PaywallScreenNavProp = NativeStackNavigationProp<
    RootStackParamList,
    "Paywall"
  >;
  const navigation = useNavigation<PaywallScreenNavProp>();
  const dispatch = useDispatch();
  const [selectedPlan, setSelectedPlan] = useState("year");

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.closeBtn}
        onPress={() => {
          dispatch(completeOnboarding());

          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: "Home" }],
            })
          );
        }}
      >
        <Entypo name="cross" size={24} color="white" />
      </TouchableOpacity>
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
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={featuresData}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View style={{ marginLeft: index === 0 ? 24 : 0 }}>
                <AppFeatureItem
                  icon={item.icon}
                  title={item.title}
                  subTitle={item.subTitle}
                />
              </View>
            )}
          />
        </View>
      </ImageBackground>
      <View style={styles.plansContainer}>
        <View style={styles.firstTwoButtonsContainer}>
          <TouchableOpacity
            style={[styles.btn, selectedPlan === "month" && styles.selectedBtn]}
            onPress={() => setSelectedPlan("month")}
          >
            {selectedPlan === "month" ? (
              <LinearGradient
                colors={["#101e17", "#133525"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.gradient}
              >
                <View
                  style={[
                    styles.radioBtn,
                    selectedPlan === "month" && styles.selectedRadio,
                  ]}
                >
                  <View
                    style={[
                      styles.innerCircle,
                      selectedPlan === "month" && styles.selectedInnerCircle,
                    ]}
                  ></View>
                </View>

                <View>
                  <Text style={styles.planText}>1 Month</Text>
                  <Text style={styles.planSubtext}>
                    $2.99/month, auto renewable
                  </Text>
                </View>
              </LinearGradient>
            ) : (
              <>
                <View
                  style={[
                    styles.radioBtn,
                    selectedPlan === "month" && styles.selectedRadio,
                  ]}
                >
                  <View
                    style={[
                      styles.innerCircle,
                      selectedPlan === "month" && styles.selectedInnerCircle,
                    ]}
                  ></View>
                </View>

                <View>
                  <Text style={styles.planText}>1 Month</Text>
                  <Text style={styles.planSubtext}>
                    $2.99/month, auto renewable
                  </Text>
                </View>
              </>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.btn, selectedPlan === "year" && styles.selectedBtn]}
            onPress={() => setSelectedPlan("year")}
          >
            {selectedPlan === "year" ? (
              <LinearGradient
                colors={["#101e17", "#133525"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[styles.gradient]}
              >
                <View style={[styles.discountContainer, styles.activeDiscount]}>
                  <Text style={styles.discountText}>Save 50%</Text>
                </View>
                <View
                  style={[
                    styles.radioBtn,
                    selectedPlan === "year" && styles.selectedRadio,
                  ]}
                >
                  <View
                    style={[
                      styles.innerCircle,
                      selectedPlan === "year" && styles.selectedInnerCircle,
                    ]}
                  ></View>
                </View>
                <View>
                  <Text style={styles.planText}>1 Year</Text>
                  <Text style={styles.planSubtext}>
                    First 3 days free, then $529,99/year
                  </Text>
                </View>
              </LinearGradient>
            ) : (
              <>
                <View style={styles.discountContainer}>
                  <Text style={styles.discountText}>Save 50%</Text>
                </View>
                <View
                  style={[
                    styles.radioBtn,
                    selectedPlan === "year" && styles.selectedRadio,
                  ]}
                >
                  <View
                    style={[
                      styles.innerCircle,
                      selectedPlan === "year" && styles.selectedInnerCircle,
                    ]}
                  ></View>
                </View>
                <View>
                  <Text style={styles.planText}>1 Year</Text>
                  <Text style={styles.planSubtext}>
                    First 3 days free, then $529,99/year
                  </Text>
                </View>
              </>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.lastBtnAndFooterContainer}>
          <TouchableOpacity style={[styles.btn, styles.continueBtn]}>
            <Text style={styles.btnText}>Try free for 3 days</Text>
          </TouchableOpacity>
          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>
              After the 3-day free trial period you’ll be charged ₺274.99 per
              year unless you cancel before the trial expires. Yearly
              Subscription is Auto-Renewable
            </Text>
            <Text style={styles.footerItems}>Terms • Privacy • Restore</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  featuresContainer: {
    // borderWidth: 1,
    // borderColor: "white",
    marginTop: 15,
  },
  titlesContainer: {
    marginLeft: 24,
    // borderWidth: 1,
    // borderColor: "white",
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
    height: imageHeight - 100, //390
    justifyContent: "flex-end",
    // borderWidth: 1,
    // borderColor: "white",
    paddingBottom: 16,
  },
  plansContainer: {
    backgroundColor: "#101e17",
    flex: 1,
    // borderWidth: 1,
    // borderColor: "white",
    paddingTop: 0,
  },
  btn: {
    backgroundColor: "#1c2923",
    marginHorizontal: 24,
    display: "flex",
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
    borderRadius: 14,
    height: buttonHeight,
    marginBottom: buttonMargins,
    borderColor: "#FFFFFF4D",
    borderWidth: 1,
    overflow: "hidden",
    position: "relative",
  },
  selectedBtn: {
    borderColor: "#28AF6E",
  },
  btnText: { fontWeight: "700", fontSize: 15, color: "#FFFFFF" },
  footerContainer: {
    marginHorizontal: 24,
  },
  footerText: {
    textAlign: "center",
    fontWeight: "300",
    fontSize: 10,
    color: "#FFFFFF85",
    borderWidth: 1,
    borderColor: "white",
  },
  footerItems: {
    fontSize: 12,
    color: "#FFFFFF80",
    fontWeight: "400",
    textAlign: "center",
    marginTop: 8,
  },
  firstTwoButtonsContainer: {
    // marginTop: 16,
  },
  lastBtnAndFooterContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: "red",
    justifyContent: "flex-end",
    paddingBottom: lastBtnAndFooterContainerPadding,
  },
  radioBtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#2e3a35",
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedRadio: {
    backgroundColor: "#28AF6E",
  },
  innerCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#2e3a35",
  },
  selectedInnerCircle: {
    backgroundColor: "white",
  },
  planText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
  },
  planSubtext: {
    fontWeight: "400",
    fontSize: 12,
    color: "#FFFFFFB2",
  },
  gradient: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    height: buttonHeight,
    position: "relative",
  },
  discountContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    borderBottomLeftRadius: 14,
    borderTopRightRadius: 14,
    borderColor: "#FFFFFF4D",
    backgroundColor: "#FFFFFF4D",
    // borderWidth: 1,
    padding: 6,
  },
  activeDiscount: {
    backgroundColor: "#28AF6E",
  },
  discountText: {
    color: "white",
    fontWeight: "500",
    fontSize: 12,
  },
  continueBtn: {
    backgroundColor: "#28AF6E",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  closeBtn: {
    position: "absolute",
    top: 50,
    right: 20,
    width: 30,
    height: 30,
    backgroundColor: "black",
    zIndex: 1,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PaywallScreen;
