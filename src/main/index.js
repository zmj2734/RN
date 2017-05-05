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
} from "react-native"


export default class index extends React.Component {

    constructor(){
        super()
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

    fileUpload(){
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
                    <TouchableOpacity onPress={this.progress.bind(this)}>
                        <Text style={styles.rowText}>进度条</Text>
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