/**
 * Created by zmj on 2017/4/24.
 */
import React from "react"
import {
    ScrollView,
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Platform
} from "react-native"

import Screen from "react-native-splash-screen"

export default class index extends React.Component {

    static  navigationOptions = {
        title: '主页',
    };

    constructor(){
        super()
    }

    componentDidMount(){
        Screen.hide()
    }

    toBaiduMap(){
        const { navigate } = this.props.navigation;
        navigate("MapView")
    };

    webView(){
        const { navigate } = this.props.navigation;
        navigate("WebView")
    }

    listView () {
        const { navigate } = this.props.navigation;
        navigate("ListView")
    }

    gridView () {
        const { navigate } = this.props.navigation;
        navigate("GridView")
    }

    imagePicker(){
        const { navigate } = this.props.navigation;
        navigate("ImagePicker")
    }

    bigImage(){
        const { navigate } = this.props.navigation;
        navigate("BigImage")
    }

    fileUpload(){
        if(Platform.OS === "ios"){
            alert("IOS版待开发")
            return
        }
        const { navigate } = this.props.navigation;
        navigate("FileUpload")
    };

    fileDown(){
        const { navigate } = this.props.navigation;
        navigate("FileDown")
    };

    progress(){
        const { navigate } = this.props.navigation;
        navigate("Progress")
    }

    circelButton(){
        const { navigate } = this.props.navigation;
        navigate("CircelButton")
    }
    update(){
        const { navigate } = this.props.navigation;
        navigate("Update")
    }

    textField(){
        const { navigate } = this.props.navigation;
        navigate("TextField")
    }
    camera(){
        const { navigate } = this.props.navigation;
        navigate("Camera")
    }

    barcode(){
        const { navigate } = this.props.navigation;
        navigate("BarCode")
    }

    banner(){
        const { navigate } = this.props.navigation;
        navigate("Banner")
    }

    charts(){
        const { navigate } = this.props.navigation;
        navigate("ChartsWrapper")
    }

    render() {
        return (
            <ScrollView style={styles.listView}>
                <View style={styles.buttonContents}>
                    <TouchableOpacity onPress={this.toBaiduMap.bind(this)}>
                        <Text style={styles.rowText}>百度地图</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContents}>
                    <TouchableOpacity onPress={this.webView.bind(this)}>
                        <Text style={styles.rowText}>webView</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContents}>
                    <TouchableOpacity onPress={this.listView.bind(this)}>
                        <Text style={styles.rowText}>listView</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContents}>
                    <TouchableOpacity onPress={this.gridView.bind(this)}>
                        <Text style={styles.rowText}>gridView</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContents}>
                    <TouchableOpacity onPress={this.progress.bind(this)}>
                        <Text style={styles.rowText}>进度条</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContents}>
                    <TouchableOpacity onPress={this.imagePicker.bind(this)}>
                        <Text style={styles.rowText}>图片选择</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContents}>
                    <TouchableOpacity onPress={this.bigImage.bind(this)}>
                        <Text style={styles.rowText}>大图预览</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContents}>
                    <TouchableOpacity onPress={this.fileUpload.bind(this)}>
                        <Text style={styles.rowText}>文件上传</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContents}>
                    <TouchableOpacity onPress={this.fileDown.bind(this)}>
                        <Text style={styles.rowText}>文件下载</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContents}>
                    <TouchableOpacity onPress={this.circelButton.bind(this)}>
                        <Text style={styles.rowText}>CircelButton</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContents}>
                    <TouchableOpacity onPress={this.update.bind(this)}>
                        <Text style={styles.rowText}>热更新</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContents}>
                    <TouchableOpacity onPress={this.textField.bind(this)}>
                        <Text style={styles.rowText}>TextField</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContents}>
                    <TouchableOpacity onPress={this.camera.bind(this)}>
                        <Text style={styles.rowText}>相机</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContents}>
                    <TouchableOpacity onPress={this.barcode.bind(this)}>
                        <Text style={styles.rowText}>扫描</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContents}>
                    <TouchableOpacity onPress={this.banner.bind(this)}>
                        <Text style={styles.rowText}>Banner</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContents}>
                    <TouchableOpacity onPress={this.charts.bind(this)}>
                        <Text style={styles.rowText}>图表</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

var styles = StyleSheet.create({
    listView: {
        flex: 1,
        backgroundColor: '#B0C4DE',
    },
    row: {
        margin: 3,
        backgroundColor: "#aaa",
        height: 30,
        width: "100%"
    },
    rowText: {
        color: "#2336d6",
        alignItems: "center"
    },
    buttonContents: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        marginVertical: 5,
        padding: 5,
        backgroundColor: '#EAEAEA',
        borderRadius: 3,
        paddingVertical: 10,
    },
})