/**
 * Created by zmj on 2017/4/24.
 */
import React from "react"
import {StackNavigator} from 'react-navigation';
import HomeScreen from "./index"
import MapView from "../../src/baiduMap"
import FileDown from "../../src/file/down"
import FileUpload from "../../src/file/upload"
import Progress from "../../src/progress"
import WebView from "./webView"
import CircelButton from "../../src/circle"
import ListView from "../../src/listView"
import Update from "../../src/update"

var AppNavigator = StackNavigator({
        Index: {screen: HomeScreen},
        MapView: {screen: MapView},
        FileDown: {screen: FileDown},
        FileUpload: {screen: FileUpload},
        Progress: {screen: Progress},
        WebView: {screen: WebView},
        CircelButton: {screen: CircelButton},
        ListView: {screen: ListView},
        Update: {screen: Update}
    },
    {
        initialRouteName: 'Index',
        headerMode: 'none',
        navigationOptions: {
            cardStack: {
                gesturesEnabled: true
            }
        },
        mode: 'card',
        cardStyle: ""
    }
)

export default () => <AppNavigator />
