import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Switch,
  Image,
} from "react-native";

const AddNewHabbit = () => {
  const [isToggled, setIsToggled] = useState(false);
  const defaultColor = "white";
  const toggledColor = "#00A991";

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.AddNewHabbitPage}>
      <View style={styles.sectionSpacing}>
        <Text style={styles.sectionTitle}>New Habbit</Text>
        <TextInput
          placeholder="Meditation"
          placeholderTextColor={"#656363"}
          style={styles.textInput}
        ></TextInput>
      </View>

      <View style={styles.sectionSpacing}>
        <Text style={styles.sectionTitle}>Description</Text>
        <TextInput
          placeholder="meditation before sleep"
          placeholderTextColor={"#656363"}
          style={styles.textInput}
        ></TextInput>
      </View>
      <View style={styles.sectionSpacing}>
        <Text style={styles.sectionTitle}>Goals</Text>
        <TextInput
          placeholder="15 minutes of meditation everyday"
          placeholderTextColor={"#656363"}
          style={styles.textInput}
        ></TextInput>
      </View>
      <View>
        <Text style={styles.sectionTitle}>Types of Habbit</Text>
        <View style={styles.habbitSection}>
          <Image source={require("../../assets/images/PersonalGrowth.png")} />
          <Pressable
            onPress={() => setIsToggled((current) => !current)}
            style={({ pressed }) => [
              styles.button,
              {
                backgroundColor: isToggled ? toggledColor : defaultColor,
                marginLeft: 10
              },
              
            ]}
          >
            Personal Growth
          </Pressable>
        </View>

        <View style={styles.habbitSection}>
          <Image
            source={require("../../assets/images/HobbyAndCreativity.png")}
          />
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
        </View>

        <View style={styles.habbitSection}>
          <Image source={require("../../assets/images/HealthAndFitness.png")} />
          <Pressable
            onPress={() => setIsToggled((current) => !current)}
            style={({ pressed }) => [
              styles.button,
              {
                backgroundColor: isToggled ? toggledColor : defaultColor,
                marginLeft: 10
              },
            ]}
          >
            Health and fitness
          </Pressable>
        </View>

        <View style={styles.habbitSection}>
          <Image
            source={require("../../assets/images/WorkAndProductivity.png")}
          />
          <Pressable
            onPress={() => setIsToggled((current) => !current)}
            style={({ pressed }) => [
              styles.button,
              {
                backgroundColor: isToggled ? toggledColor : defaultColor,
                marginLeft: 10
              },
            ]}
          >
            Work and Productivity
          </Pressable>
        </View>

        <View style={styles.habbitSection}>
          <Image source={require("../../assets/images/HomeAndRoutine.png")} />
          <Pressable
            onPress={() => setIsToggled((current) => !current)}
            style={({ pressed }) => [
              styles.button,
              {
                backgroundColor: isToggled ? toggledColor : defaultColor,
                marginLeft: 10
              },
            ]}
          >
            Home and routine
          </Pressable>
        </View>
      </View>
      <View style={styles.dayselectContainer}>
        <View>Select Day</View>
        <View style={styles.EverydayContainer}>
          <Text style={{marginRight: 15}}>Everyday</Text>
          <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        </View>
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
    flexDirection: "column",
  },
  sectionTitle: {
    fontSize: 25,
    marginBottom: 10,
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
    marginBottom: 20,
  },
  button: {
    padding: 4,
    borderRadius: 5,
  },
  text: {
    color: "white",
    fontSize: 14,
  },
  sectionSpacing: {
    marginBottom: 10,
  },
  habbitSection: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#A5D6A7",
    margin: 10,
    width: 177,
    height: 33,
  },
  EverydayContainer: {
    flexDirection: "row",
  }
});

export default AddNewHabbit;
