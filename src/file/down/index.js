/**
 * 下载
 * Created by zmj on 2017/4/25.
 */
import React from "react" ;
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from "react-native"

import RNFetchBlob from 'react-native-fetch-blob'
import * as Progress from 'react-native-progress';

export default class down extends React.Component {

    constructor(){
        super()
        this.state = {
            progressNum : 0
        }
    }

    down() {
        const _this = this ;
        RNFetchBlob.config({
            fileCache: true,
        }).fetch('GET', 'http://dldir1.qq.com/qqfile/qq/QQ8.9.1/20453/QQ8.9.1.exe', {
            Authorization: 'dvgdgbdkhgiahugiauerhiu',
        }).progress((received, total) => {
            _this.setState({
                progressNum : received / total
            })
        }).
        then((res) => {
            _this.setState({
                progressNum : 1
            })
        }).catch((errorMessage, statusCode) => {
        })
    }

    render() {
        return (
            <View style={styles.listView}>
                <View style={styles.buttonContents}>
                    <TouchableOpacity onPress={this.down.bind(this)}>
                        <Text style={styles.rowText}>下载</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContents}>
                    <Progress.Pie progress={this.state.progressNum} size={50} />
                </View>
            </View>
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