import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const TaskList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerText}>Daily Task</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>

      <View style={styles.taskRow}>
        <View style={[styles.statusDot, { backgroundColor: "#00A991" }]} />

        <Image
          source={require("../assets/images/HobbySymbol.png")}
          style={styles.icon}
        />

        <Text style={styles.taskText}>Drink water 2 liter</Text>

        <Image
          source={require("../assets/images/EditPencil.png")}
          style={styles.editIcon}
        />
      </View>

      <View style={styles.taskRow}>
        <View style={[styles.statusDot, { backgroundColor: "#B0BEC5" }]} />

        <Image
          source={require("../assets/images/HobbySymbol.png")}
          style={styles.icon}
        />

        <Text style={styles.taskText}>Drink water 2 liter</Text>

        <Image
          source={require("../assets/images/EditPencil.png")}
          style={styles.editIcon}
        />
      </View>

      <View style={styles.taskRow}>
        <View style={[styles.statusDot, { backgroundColor: "#B0BEC5" }]} />

        <Image
          source={require("../assets/images/HobbySymbol.png")}
          style={styles.icon}
        />

        <Text style={styles.taskText}>Drink water 2 liter</Text>

        <Image
          source={require("../assets/images/EditPencil.png")}
          style={styles.editIcon}
        />
      </View>

      <View style={styles.taskRow}>
        <View style={[styles.statusDot, { backgroundColor: "#B0BEC5" }]} />

        <Image
          source={require("../assets/images/HobbySymbol.png")}
          style={styles.icon}
        />

        <Text style={styles.taskText}>Drink water 2 liter</Text>

        <Image
          source={require("../assets/images/EditPencil.png")}
          style={styles.editIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 20,
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "600",
  },
  seeAll: {
    fontSize: 14,
    color: "#00A991",
  },

  taskRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },

  statusDot: {
    width: 14,
    height: 14,
    borderRadius: 10,
    marginRight: 12,
  },

  icon: {
    width: 28,
    height: 28,
    marginRight: 12,
    resizeMode: "contain",
  },

  taskText: {
    flex: 1,
    fontSize: 16,
  },

  editIcon: {
    width: 20,
    height: 20,
    marginLeft: 12,
  },
});

export default TaskList;
