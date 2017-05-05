/**
 * Created by zmj on 2017/5/3.
 */
import {
    StyleSheet,
    Dimensions
} from 'react-native';

export default StyleSheet.create({
    view: {
        flex: 1
    },
    itemRowLine: {
        height: 0.5,
        width: Dimensions.get("window").width,
        backgroundColor: "black"
    },
    itemColumnLine: {
        width: 1
    },
    indicator: {
        bottom: 5,
        zIndex: 999,
        justifyContent: "center",
        backgroundColor: "transparent",
        alignItems: "center",
        position: "absolute",
        width: Dimensions.get("window").width,
    },
    emptyView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})