/**
 * 圆角浮动按钮
 * Created by zmj on 2017/5/2.
 */

import React from "react"
import {
    View
} from "react-native"

import Circel from "react-native-circle-button"

export default class CircelButton extends React.Component{
    render(){
        return (
            <View style={{flex :1 }}>
                <Circel size={30} primaryColor="rgb(74,204,96)" secondaryColor="gray"/>
            </View>
        )
    }
}
