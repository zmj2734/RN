/**
 * Created by zmj on 2017/4/24.
 */
import React from "react"
import {StackNavigator} from 'react-navigation';
import HomeScreen from "./index"
import MapView from "../baiduMap"
import FileDown from "../file/down"
import FileUpload from "../file/upload"
import Progress from "../progress"
import WebView from "./webView"
import CircelButton from "../circle"
import ListView from "../listView"

var AppNavigator = StackNavigator({
        Index: {screen: HomeScreen},
        MapView: {screen: MapView},
        FileDown: {screen: FileDown},
        FileUpload: {screen: FileUpload},
        Progress: {screen: Progress},
        WebView: {screen: WebView},
        CircelButton: {screen: CircelButton},
        ListView: {screen: ListView}
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
