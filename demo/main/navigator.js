/**
 * Created by zmj on 2017/4/24.
 */
import React from "react"
import {
    View
} from "react-native"
import {StackNavigator} from 'react-navigation';
import HomeScreen from "./index"
import MapView from "../../src/baiduMap"
import FileDown from "../../src/file/down"
import FileUpload from "../../src/file/upload"
import Progress from "../../src/progress"
import WebView from "./webView"
import CircelButton from "../../src/circle"
import GridView from "../gridView"
import ListView from "../listView"
import Update from "../../src/update"
import TextField from "../../src/TextField"
import Camera from "../../src/camera"
import BarCode from "../../src/barCode"
import ImagePicker from "../../src/file/imagePicker"
import BigImage from "../../src/file/bigImage"
import Banner from "../../src/banner"

let AppNavigator = StackNavigator({
        Index: {screen: HomeScreen},
        MapView: {screen: MapView},
        FileDown: {screen: FileDown},
        FileUpload: {screen: FileUpload},
        Progress: {screen: Progress},
        WebView: {screen: WebView},
        CircelButton: {screen: CircelButton},
        ListView: {screen: ListView},
        Update: {screen: Update},
        GridView: {screen: GridView} ,
        TextField : {screen : TextField} ,
        Camera : {screen : Camera},
        BarCode : {screen : BarCode},
        ImagePicker : {screen : ImagePicker},
        BigImage : {screen : BigImage},
        Banner : {screen : Banner}
    },
    {
        initialRouteName: 'Index',
        //headerMode: 'none',
        navigationOptions: {
            cardStack: {
                gesturesEnabled: true
            }
        },
        mode: 'card',
    }
)



export default class extends React.Component {
    render() {
        return (
        <View style={{flex:1,flexDirection :"row"}}>
            <AppNavigator />
        </View>
        )
    }
}
