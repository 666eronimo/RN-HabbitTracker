//test
import { Header, Widget } from "@/Component/Widget";
import { StyleSheet, View } from "react-native";
import Grid from '@/Component/Grid'


export default function dashboard() {
    return(
        <view style={styles.HomeMargin}>
            <Header/>
            <Widget/>
            <Grid />
        </view>
    )
}

const styles = StyleSheet.create({
HomeMargin: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 72,
}
});