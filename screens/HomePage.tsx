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
  ScrollView,
  LogBox,
} from "react-native";
import { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import Octicons from "@expo/vector-icons/Octicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import SearchBar from "../components/SearchBar";
import { getQuestions } from "../services/questions";
import { getCategories } from "../services/categories";
import QuestionItem from "../components/QuestionItem";
import { QuestionItemProps } from "../types/question";
import CategoryItem from "../components/CategoryItem";
import { CategoryItemProps } from "../types/categories";
const currentHour = new Date().getHours();
let timeOfDay = "";
if (currentHour < 12) {
  timeOfDay = "Morning";
} else if (currentHour < 18) {
  timeOfDay = "Afternoon";
} else {
  timeOfDay = "Evening";
}
const HomePage = () => {
  console.log(currentHour);
  const [questions, setQuestions] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getQuestions().then(setQuestions).catch(console.error);
    getCategories().then(setCategories).catch(console.error);
  }, []);
  useEffect(() => {
    LogBox.ignoreLogs([
      "VirtualizedLists should never be nested", // my ScrollView and FlatList has different directions, this warning is not my concern
    ]);
  }, []);
  console.log(questions);
  console.log(categories);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.welcomeMsgContainer}>
          <Text style={styles.greetingText}>Hi, plant lover!</Text>
          <Text style={styles.timeOfDayText}>Good {timeOfDay}!</Text>
        </View>
        <ImageBackground
          source={require("../assets/searchBarBackground.png")}
          style={styles.searchBarContainer}
        >
          <SearchBar />
        </ImageBackground>
        <ScrollView>
          <TouchableOpacity style={styles.upgradeBtn}>
            <Octicons
              name="mail"
              size={24}
              color="#D9A846"
              style={styles.mailIcon}
            />
            <View style={styles.upgradeBtnTextsContainer}>
              <MaskedView
                maskElement={
                  <Text style={[styles.upgradeBtnTitle]}>
                    FREE Premium Available
                  </Text>
                }
              >
                <LinearGradient
                  colors={["#E5C990", "#E4B046"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <Text style={[styles.upgradeBtnTitle, { opacity: 0 }]}>
                    FREE Premium Available
                  </Text>
                </LinearGradient>
              </MaskedView>
              <MaskedView
                maskElement={
                  <Text style={[styles.upgradeBtnSubtitle]}>
                    Tap to upgrade your account!
                  </Text>
                }
              >
                <LinearGradient
                  colors={["#FFDE9C", "#F5C25B"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <Text style={[styles.upgradeBtnSubtitle, { opacity: 0 }]}>
                    Tap to upgrade your account!
                  </Text>
                </LinearGradient>
              </MaskedView>
            </View>
            <View style={styles.rightIconContainer}>
              <AntDesign
                name="right"
                size={24}
                color="#D9A846"
                //   style={styles.rightIcon}
              />
            </View>
          </TouchableOpacity>

          {/* // questions */}
          <View style={styles.questionsContainer}>
            <Text style={styles.questionsContainerTitle}>Get Started</Text>
            <FlatList<QuestionItemProps>
              horizontal
              showsHorizontalScrollIndicator={false}
              data={questions}
              keyExtractor={(item) => item.title.toString()}
              renderItem={({ item, index }) => (
                <View style={{ marginLeft: index === 0 ? 24 : 0 }}>
                  <QuestionItem
                    title={item.title}
                    subtitle={item.subtitle}
                    image_uri={item.image_uri}
                    uri={item.uri}
                  />
                </View>
              )}
            />
          </View>

          <View style={styles.categoriesContainer}>
            <FlatList<CategoryItemProps>
              data={categories}
              renderItem={({ item }) => (
                <CategoryItem title={item.title} image={item.image} />
              )}
              keyExtractor={(item) => item.title.toString()}
              numColumns={2}
              columnWrapperStyle={{
                justifyContent: "space-between",
              }}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  welcomeMsgContainer: {
    marginLeft: 24,
  },
  greetingText: {
    fontSize: 16,
    fontWeight: "400",
    color: "#13231B",
  },
  timeOfDayText: {
    fontWeight: "500",
    fontSize: 24,
    color: "#13231B",
  },
  searchBarContainer: {
    // borderWidth: 2,
    // borderColor: "black",
  },
  upgradeBtn: {
    backgroundColor: "#24201A",
    marginHorizontal: 24,
    height: 64,
    borderRadius: 12,
    marginVertical: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  mailIcon: { marginHorizontal: 18 },
  upgradeBtnTextsContainer: {},
  upgradeBtnTitle: {
    fontWeight: "700",
    fontSize: 16,
  },
  upgradeBtnSubtitle: {
    fontWeight: "400",
    fontSize: 13,
  },
  rightIcon: {
    flex: 1,
    borderColor: "white",
    borderWidth: 1,
  },
  rightIconContainer: {
    // borderColor: "white",
    // borderWidth: 1,
    flex: 1,
    alignItems: "flex-end",
    paddingRight: 12,
  },
  questionsContainer: {
    borderWidth: 1,
    borderColor: "black",
    // alignItems: "center",
    // justifyContent: "center"
  },
  questionsContainerTitle: {
    marginLeft: 24,
    color: "#13231B",
    fontWeight: "500",
    fontSize: 15,
    marginBottom: 8,
  },
  categoriesContainer: {
    marginHorizontal: 24,
    paddingTop: 24,
  },
});

export default HomePage;
