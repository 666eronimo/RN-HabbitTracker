import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Grid = () => {

  
const daysData = [
  "done","missed","done","done","done","done","done",
  "done","done","done","done","today","missed","missed",
  "missed","done","done","done","missed","missed","missed",
  "missed","missed","missed","missed","missed"
];
  return (
    <View style={styles.GridContainer}>
      <View style={styles.HeaderGrid}>
        <Text>November</Text>
        <Text>2025</Text>
      </View>

      <View style={styles.grid}>
        {daysData.map((status, index) => (
          <View
            key={index}
            style={[
              styles.dayBox,
              status === "done" && { backgroundColor: "#00A991" },
              status === "missed" && { backgroundColor: "#B0BEC5" },
              status === "today" && { backgroundColor: "#FFEB3B" }
            ]}
          />
        ))}
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
    columnGap: 16,
    flexWrap: "wrap",
    width: "100%",
  },

  GrindInfo: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingTop: 10,
  },

  grid: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 14,
    columnGap: 14,
    justifyContent: "flex-start",
    paddingVertical: 10,
  },

  statusItem: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 16,
  },
  box: {
    width: 15,
    height: 15,
    borderRadius: 3,
  },

  GridContainer: {
    width: "100%",
    alignSelf: "stretch",
  },
   dayBox: {
    width: 35,
    height: 35,
    borderRadius: 6,
  },
});

export default Grid;
