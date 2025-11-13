import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Grid = () => {
  return (
    <View>
      <View style={styles.HeaderGrid}>
        <Text>November</Text>
        <Text>2025</Text>
      </View>

      <View style={styles.grid}>

      </View>

      <View style={styles.GrindInfo}>
        <View style={styles.statusItem}>
          <View style={[styles.box, { backgroundColor: "#00A991" }]} />
          <Text>Done</Text>
        </View>
        <View style={styles.statusItem}>
          <View style={[styles.box, { backgroundColor: "#B0BEC5" }]} />
          <Text>Missed</Text>
        </View>
        <View style={styles.statusItem}>
          <View style={[styles.box, { backgroundColor: "#FFFF00" }]} />
          <Text>Today</Text>
        </View>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
HeaderGrid: {
    flexDirection: "row",
    gap: 16,
  },
  GrindInfo: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 16,
    alignItems: "center",
    marginTop: 10,
  },
  grid: {
    width: 400,
    height: 214,
    backgroundColor: "#00A991",
    borderColor: "#00A991",
  },
  statusItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  box: {
    width: 15,
    height: 15,
    borderRadius: 3,
  },
});

export default Grid;
