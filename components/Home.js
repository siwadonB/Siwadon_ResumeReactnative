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
import { initialWindowMetrics } from "react-native-safe-area-context";

const NavigateToDetails = (props) => {
  props.navigation.navigate("Home");
};
const NavigateToDetails2 = (props) => {
  props.navigation.navigate("Edu");
};
const NavigateToDetails3 = (props) => {
  props.navigation.navigate("Code");
};

const Home = (props) => {
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

        <Image style={styles.photo1} source={require("./assets/Me.jpg")} />
        <View style={styles.sub}>
          <Text style={styles.subtext}>SIWADON</Text>
          <Text style={styles.subtext}>
            BOONPRADUB
            <Image style={styles.photo2} source={require("./assets/id.png")} />
          </Text>
        </View>

        <View style={styles.Container2}>
          <Text style={styles.mtext}>
            PERSONAL DETAIL
            {/* <Image
              style={styles.photo3}
              source={require("./assets/user.png")}
            /> */}
          </Text>
          <Text style={styles.context}>Birth Date : January 4th 1998</Text>
          <Text style={styles.context}>Age : 24</Text>
          <Text style={styles.context}>Nationality : Thai</Text>

          <Text style={styles.mtext}>
            CONTACT
            {/* <Image
              style={styles.photo3}
              source={require("./assets/contact.png")}
            /> */}
          </Text>
          <Text style={styles.context}> EMAIL : boonpradub.si@gmail.com</Text>
          <Text style={styles.context}>Tel : 080-5060169</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  all: {
    flex: 1,
  },
  Container: {
    position: "absolute",
    margin: 5,
    padding: 20,
    borderRadius: 15,
    flexDirection: "row",
    alignContent: "space-between",
    flex: 1,
  },
  subtext: {
    fontFamily: "Cochin",
    fontSize: 17,
    letterSpacing: 0.65,
    fontWeight: "bold",
  },
  sub: {
    backgroundColor: "#eee",
    position: "absolute",
    marginTop: 170,
    marginLeft: 170,
    padding: 20,
    borderRadius: 10,
  },
  Container2: {
    backgroundColor: "#eee",
    position: "absolute",
    marginTop: 350,
    marginLeft: 50,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  mtext: {
    fontFamily: "Cochin",
    fontSize: 18,
    letterSpacing: 0.45,
    padding: 10,
    color: `#1e90ff`,
  },
  context: {
    fontSize: 16,
  },
  photo3: {
    width: 30,
    height: 30,
  },
  photo1: {
    width: 130,
    height: 150,
    marginTop: 140,
    marginLeft: 13,
    borderRadius: 100,
  },
  photo2: {
    width: 40,
    height: 40,
    position: "absolute",
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
});

export default Home;
