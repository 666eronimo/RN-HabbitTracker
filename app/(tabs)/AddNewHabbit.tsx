import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Button,
} from "react-native";

const AddNewHabbit = () => {
  const [isToggled, setIsToggled] = useState(false);
  const defaultColor = "white";
  const toggledColor = "#00A991";
  return (
    <View style={styles.AddNewHabbitPage}>
      <View>
        <Text style={styles.sectionTitle}>New Habbit</Text>
        <TextInput
          placeholder="Meditation"
          placeholderTextColor={"#656363"}
          style={styles.textInput}
        ></TextInput>
      </View>

      <View>
        <Text style={styles.sectionTitle}>Description</Text>
        <TextInput
          placeholder="meditation before sleep"
          placeholderTextColor={"#656363"}
          style={styles.textInput}
        ></TextInput>
      </View>
      <View>
        <Text style={styles.sectionTitle}>Goals</Text>
        <TextInput
          placeholder="15 minutes of meditation everyday"
          placeholderTextColor={"#656363"}
          style={styles.textInput}
        ></TextInput>
      </View>
      <View>
        <Text style={styles.sectionTitle}>Types of Habbit</Text>
        <Pressable
          onPress={() => setIsToggled((current) => !current)}
          style={({ pressed }) => [
            styles.button,
            {
              backgroundColor: isToggled ? toggledColor : defaultColor,
            },
          ]}
        >
          Personal Growth
        </Pressable>
        <Pressable
          onPress={() => setIsToggled((current) => !current)}
          style={({ pressed }) => [
            styles.button,
            {
              backgroundColor: isToggled ? toggledColor : defaultColor,
            },
          ]}
        >
          Hobby and creativity
        </Pressable>
        <Pressable
          onPress={() => setIsToggled((current) => !current)}
          style={({ pressed }) => [
            styles.button,
            {
              backgroundColor: isToggled ? toggledColor : defaultColor,
            },
          ]}
        >
          Health and fitness
        </Pressable>
        <Pressable
          onPress={() => setIsToggled((current) => !current)}
          style={({ pressed }) => [
            styles.button,
            {
              backgroundColor: isToggled ? toggledColor : defaultColor,
            },
          ]}
        >
          Work and Productivity
        </Pressable>
        <Pressable
          onPress={() => setIsToggled((current) => !current)}
          style={({ pressed }) => [
            styles.button,
            {
              backgroundColor: isToggled ? toggledColor : defaultColor,
            },
          ]}
        >
          Home and routine
        </Pressable>
      </View>
      <View style={styles.dayselectContainer}>
        <View>Select Day</View>
        <View>Everyday</View>
      </View>
      <View style={styles.daysSelection}>
        <Pressable
          onPress={() => setIsToggled((current) => !current)}
          style={({ pressed }) => [
            styles.button,
            {
              backgroundColor: isToggled ? toggledColor : defaultColor,
            },
          ]}
        >
          M
        </Pressable>

        <Pressable
          onPress={() => setIsToggled((current) => !current)}
          style={({ pressed }) => [
            styles.button,
            {
              backgroundColor: isToggled ? toggledColor : defaultColor,
            },
          ]}
        >
          T
        </Pressable>
        <Pressable
          onPress={() => setIsToggled((current) => !current)}
          style={({ pressed }) => [
            styles.button,
            {
              backgroundColor: isToggled ? toggledColor : defaultColor,
            },
          ]}
        >
          W
        </Pressable>
        <Pressable
          onPress={() => setIsToggled((current) => !current)}
          style={({ pressed }) => [
            styles.button,
            {
              backgroundColor: isToggled ? toggledColor : defaultColor,
            },
          ]}
        >
          T
        </Pressable>
        <Pressable
          onPress={() => setIsToggled((current) => !current)}
          style={({ pressed }) => [
            styles.button,
            {
              backgroundColor: isToggled ? toggledColor : defaultColor,
            },
          ]}
        >
          F
        </Pressable>
        <Pressable
          onPress={() => setIsToggled((current) => !current)}
          style={({ pressed }) => [
            styles.button,
            {
              backgroundColor: isToggled ? toggledColor : defaultColor,
            },
          ]}
        >
          S
        </Pressable>
        <Pressable
          onPress={() => setIsToggled((current) => !current)}
          style={({ pressed }) => [
            styles.button,
            {
              backgroundColor: isToggled ? toggledColor : defaultColor,
            },
          ]}
        >
          S
        </Pressable>
      </View>
      <View style={styles.saveButtonContainer}>
        <Pressable style={styles.saveButton}>
          <Text style={styles.saveButtonText}>save </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  AddNewHabbitPage: {
    paddingHorizontal: 20,
    marginTop: 72,
    width: "100%",
  },
  sectionTitle: {
    fontSize: 25,
  },
  HeaderGrid: {
    flexDirection: "row",
    columnGap: 16,
    flexWrap: "wrap",
    width: "100%",
  },
  textInput: {
    borderColor: "#007F6D",
    borderRadius: 5,
    borderWidth: 2,
    width: 383,
    height: 60,
    paddingLeft: 10,
    fontSize: 16,
  },
  dayselectContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  saveButton: {
    alignItems: "center",
    backgroundColor: "#00A991",
    width: 104,
    height: 40,
    borderRadius: 5,
  },
  saveButtonText: {
    fontSize: 25,
  },
  saveButtonContainer: {
    alignItems: "flex-end",
  },
  daysSelection: {
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  button: {
    padding: 4,
    borderRadius: 5,
  },
  text: {
    color: "white",
    fontSize: 14,
  },
});

export default AddNewHabbit;
