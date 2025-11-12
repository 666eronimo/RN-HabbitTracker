import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
const Separator = () => <View style={styles.separator} />;

const Header = () => (
  <View style={styles.headercontainer}>
    <Image source={require("../assets/images/emojiheader.png")} />
    <View style={styles.headertextcontainer}>
      <Text style={styles.text}>Good Morning!</Text>
      <Text style={styles.text}>Kamis, 14-03-2025</Text>
    </View>

    <Image source={require("../assets/images/profileimage.png")} />
  </View>
);

const Widget = () => (
  <View style={styles.widgetSeperator}>
    <View style={styles.container}>
      <Text>streak</Text>
      <Text>10 days streak</Text>
    </View>

    <Separator />

    <View style={styles.container}>
      <Text>Progress</Text>
      <Text>60%</Text>
    </View>

    <Separator />

    <View style={styles.container}>
      <Text>Add New Habbit</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  headercontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headertextcontainer: {
    flexDirection: "column",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
    backgroundColor: "#00A991",
    height: 123,
    width: 99,
    borderRadius: 12,
  },
  widgetSeperator: {
    justifyContent: "center",
    flexDirection: "row",
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  text: {
    fontSize: 26,
  },
  text2: {
    fontSize: 16,
  },

  //   widget: {
  //     color: #00A991,

  //   },
});

export { Header, Widget };
