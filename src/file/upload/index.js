/**
 * Created by zmj on 2017/4/25.
 */
import React from "react" ;
import {
    View,
    TouchableOpacity,
    Text,
    Alert,
    Image,
    StyleSheet
} from "react-native"
import fileUtil from "../../plugIn/fileUtil"
import RNFetchBlob from 'react-native-fetch-blob'
import * as Progress from 'react-native-progress';
export default class upload extends React.Component {

    constructor() {
        super()
        this.fileStrem = null ;
        this.state = {
            fileUrl: null,
            progressNum: 0,
            imageUri: null
        }
    }

    select() {
        var _this = this
        fileUtil.fileSelect().then(e => {
            e = JSON.parse(e)
            _this.fileToStrem(_this, e.fileUrl)
            _this.setState({
                progressNum: 0,
                fileUrl: e.fileUrl,
                imageUri: e.fileUrl
            })
        }).catch(error => {
            console.log(error)
        })
    }

    fileToStrem(_this, filePath) {
        let data = ''
        RNFetchBlob.fs.readStream(
            filePath,
            // encoding, should be one of `base64`, `utf8`, `ascii`
            'base64',
            // (optional) buffer size, default to 4096 (4095 for BASE64 encoded data)
            // when reading file in BASE64 encoding, buffer size must be multiples of 3.
            4095)
            .then((ifstream) => {
                ifstream.open()
                ifstream.onData((chunk) => {
                    // when encoding is `ascii`, chunk will be an array contains numbers
                    // otherwise it will be a string
                    data += chunk
                })
                ifstream.onError((err) => {
                    console.log('oops', err)
                })
                ifstream.onEnd(() => {
                    _this.fileStrem = data
                })
            })
    }

    upload() {
        if (!this.state.fileUrl) {
            Alert.alert("错误", "请选择文件")
            return false
        }
        const _this = this;
        RNFetchBlob.fetch('POST', 'http://192.168.33.24/image/upload', {
                Authorization: "Bearer access-token",
                'Content-Type': 'multipart/form-data',
            }, [
                {name: 'upFile', filename: 'upFile.png', type: '*/*', data: _this.fileStrem},
            ]
        ).uploadProgress({interval: 100}, (written, total) => {
            console.log(written, total)
            _this.setState({
                progressNum: written / total
            })
        }).then((resp) => {
            _this.setState({
                progressNum: 1
            })
        }).catch((err) => {
            // ...
        })

    }

    render() {
        return (
            <View style={styles.listView}>
                <View style={styles.buttonContents}>
                    <TouchableOpacity onPress={this.select.bind(this)}>
                        <Text style={styles.rowText}>文件选择</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContents}>
                    <TouchableOpacity onPress={this.upload.bind(this)}>
                        <Text style={styles.rowText}>文件上传</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContents}>
                    <Text>文件名：{this.state.fileUrl}</Text>
                </View>
                <View style={styles.buttonContents}>
                    <Progress.Pie progress={this.state.progressNum} size={50}/>
                </View>
                <View style={styles.buttonContents}>
                    <Image ref={(c) => this.image = c } source={{uri: this.state.imageUri}}
                           style={{width: 200, height: 200}}/>
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