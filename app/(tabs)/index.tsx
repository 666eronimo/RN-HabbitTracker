//test
import { Header, Widget } from "@/Component/Widget";
import { StyleSheet, View } from "react-native";
import Grid from "@/Component/Grid";
import TaskList from "@/Component/TaskList";

export default function dashboard() {
  return (
    <View style={styles.HomeMargin}>
      <Header />
      <Widget />
      <Grid />
      <TaskList />
    </View>
  );
}

const styles = StyleSheet.create({
  HomeMargin: {
    paddingHorizontal: 20,
    marginTop: 72,
    width: "100%",
  },
});
