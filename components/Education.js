import * as React from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  Pressable,
  ImageBackground,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";

const NavigateToDetails = (props) => {
  props.navigation.navigate("Home");
};
const NavigateToDetails2 = (props) => {
  props.navigation.navigate("Edu");
};
const NavigateToDetails3 = (props) => {
  props.navigation.navigate("Code");
};

const Edu = (props) => {
  const { onPress, title = "Home Page" } = props;
  const { onPress2, title2 = "Education" } = props;
  const { onPress3, title3 = "Source code" } = props;
  return (
    <ImageBackground
      source={require("./assets/apple.jpeg")}
      style={{ flex: 1, width: null, height: null }}
    >
        <View style={styles.all}>
      <View style={styles.Container}>
        <Pressable
          style={styles.button}
          onPress={() => NavigateToDetails(props)}
        >
          <Text style={styles.text}>{title}</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => NavigateToDetails2(props)}
        >
          <Text style={styles.text}>{title2}</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => NavigateToDetails3(props)}
        >
          <Text style={styles.text}>{title3}</Text>
        </Pressable>
      </View>

      <View style={styles.education}>
        <Text style={styles.edufont}>
          EDUCATION
          <Image
            style={styles.photo1}
            source={require("./assets/school.png")}
          />
        </Text>
      </View>

      {/* <View style={styles.school}>
        <Text style={styles.schoolfont}>Senior High School</Text>
        <Text style={styles.schoolfont}>Year 2013 - 2015 (2556 - 2558)</Text>
        <Text>Chalermkwansatree School</Text>
        <Text>(Phitsanulok)</Text>
        <Text>Programe : Sciences and Mathmatics</Text>
      </View> */}

      <Image
        style={styles.photo2}
        source={require("./assets/commencement.jpg")}
      />

      <View style={styles.school}>
        <Text style={styles.schoolfont}>Year 2016 - 2020 (2559 - 2563)</Text>
        <Text>Mae Fah Luang University</Text>
        <Text>School of information technology</Text>
        <Text>Major : Software Engineering</Text>
       
        <Text style={styles.schoolfont}>14 February 2022</Text>
        <Text>Commencement ceremony</Text>
        <Text>(Delay 2 year because Covid-19)</Text>
      </View></View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  Container: {
    position: "absolute",
    margin: 5,
    padding: 20,
    borderRadius: 15,
    flexDirection: "row",
    alignContent: "space-between",
    flex: 1,
  },
  subContainer: {
    backgroundColor: "#eee",
    position: "absolute",
    margin: 10,
    padding: 30,
    borderRadius: 15,
  },
  image: {
    width: 40,
    height: 40,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 10,
    elevation: 3,
    backgroundColor: `#1e90ff`,
    margin: 5,
    borderColor: "black",
    height: 40,
    borderRadius: 4,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: 18,
    letterSpacing: 0.25,
    color: "white",
  },
  photo1: {
    width: 30,
    height: 30,
  },
  education: {
    backgroundColor: "#eee",
    position: "absolute",
    marginTop: 90,
    marginLeft: 110,
    padding: 17,
    borderRadius: 10,
    alignItems: "center",
  },
  school: {
    backgroundColor: "#eee",
    position: "absolute",
    marginTop: 375,
    marginLeft: 50,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  edufont: {
    fontFamily: "Cochin",
    fontSize: 17,
    letterSpacing: 0.65,
    fontWeight: "bold",
  },
  schoolfont: {
    fontFamily: "Cochin",
    fontSize: 18,
    letterSpacing: 0.45,
    color: `#1e90ff`,
    paddingVertical:10,
  },

  photo2: {
    width: 140,
    height: 160,
    marginTop: 190,
    marginLeft: 115,
    borderRadius: 100,
  },
});

export default Edu;
