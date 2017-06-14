/**
 * Created by zmj on 2017/4/25.
 */

import React from "react"
import {
    View,
    StyleSheet
} from "react-native"

import * as Progress from 'react-native-progress';

export default class progress extends React.Component {
    constructor() {
        super()
        this.state = {
            progressNum: 0
        }
    }

    componentDidMount() {
        this.start()
    }

    componentWillUnmount() {
        // 请注意Un"m"ount的m是小写

        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearTimeout(this.timer);
    }

    start() {
        const _this = this
        const time = this.timer = setTimeout(function () {
            console.log(_this.state.progressNum)
            if (_this.state.progressNum >= 1) {
                clearTimeout(time)
            } else {
                _this.start()
            }
            _this.setState({
                progressNum: _this.state.progressNum + 0.1
            })
        }, 100)
    }

    render() {
        return (
            <View style={styles.listView}>
                <View style={styles.buttonContents}>
                    <Progress.Bar progress={this.state.progressNum} width={200} />
                </View>
                <View style={styles.buttonContents}>
                    <Progress.Pie progress={this.state.progressNum} size={50} />
                </View>
                <View style={styles.buttonContents}>
                    <Progress.Circle size={60} progress={this.state.progressNum} showsText={true} />
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
