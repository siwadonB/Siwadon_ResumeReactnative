import { useCallback } from "react";
import * as React from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  Pressable,
  ImageBackground,
  Linking,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";

const ionic = "https://github.com/siwadonB/Siwadon_SeniorIonic.git";
const angular = "https://github.com/siwadonB/Siwadon_SeniorAngular.git";

const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

const NavigateToDetails = (props) => {
  props.navigation.navigate("Home");
};
const NavigateToDetails2 = (props) => {
  props.navigation.navigate("Edu");
};
const NavigateToDetails3 = (props) => {
  props.navigation.navigate("Code");
};

const Code = (props) => {
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
          My Senior Project
          <Image
            style={styles.photo1}
            source={require("./assets/project.png")}
          />
        </Text>
      </View>
      <View style={styles.showcode}>
        <Text>Ionic Front-End (Mobile)</Text>
        <OpenURLButton url={ionic}>Ionic GitHub</OpenURLButton>
        <Text>Angular Back-End (Web)</Text>
        <OpenURLButton url={angular}>Angular GitHub</OpenURLButton>
      </View>
      <View style={styles.last}>
        <Text style={styles.edufont}>
          This React Native source code
          <Image
            style={styles.photo1}
            source={require("./assets/react.png")}
          />
        </Text>
      </View>
      <View style={styles.lastcode}>
        <Text>React Native</Text>
        <OpenURLButton url={ionic}>React Native GitHub</OpenURLButton>
      </View>
      </View>
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
    marginTop: 100,
    marginLeft: 90,
    padding: 17,
    borderRadius: 10,
    alignItems: "center",
  },
  edufont: {
    fontFamily: "Cochin",
    fontSize: 17,
    letterSpacing: 0.65,
    fontWeight: "bold",
    lineHeight: 25,
    color: `black`,
  },
  showcode: {
    backgroundColor: "#eee",
    position: "absolute",
    marginTop:185,
    marginLeft: 95,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  last:{
    backgroundColor: "#eee",
    position: "absolute",
    marginTop: 375,
    marginLeft: 35,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  lastcode:{
    backgroundColor: "#eee",
    position: "absolute",
    marginTop: 460,
    marginLeft: 83,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
});

export default Code;
