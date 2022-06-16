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

const Welcome = (props) => {
  const { onPress, title = "Next" } = props;
  return (
    <ImageBackground
      source={require("./assets/apple2.jpeg")}
      style={{ flex: 1, width: null, height: null }}
    >
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.mtext}>
            Welcome to Siwadon Resume
            <Image
              style={styles.image}
              source={require("./assets/resume.png")}
            />
          </Text>
          <Pressable
            style={styles.button}
            onPress={() => NavigateToDetails(props)}
          >
            <Text style={styles.text}>{title}</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: `#1e90ff`,
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  mtext: {
    fontFamily: "Cochin",
  fontSize:18,
  }
});

export default Welcome;
