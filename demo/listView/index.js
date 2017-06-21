/**
 * Created by zmj on 2017/5/8.
 */

import React from "react"
import {
    View,
    Text
} from "react-native"
import ListView from "../../src/listView/index"
import Image from 'react-native-image-progress' ;
import * as Progress from 'react-native-progress' ;
let localImage = require("../../image/banner01.jpg")
export default class index extends React.Component {

    static navigationOptions = {
        mode : 'card',
    }


    constructor() {
        super()
        this.state = {
            data : null,
            isRefresh : true ,     //是否启用下拉刷新控件
            pageSize : 10,
        }
    }

    componentDidMount(){
        const data = {
            code: 0,
            data: [
                {"url":"http://imgsrc.baidu.com/forum/w%3D580/sign=5a87accf2c2eb938ec6d7afae56285fe/9578a6efce1b9d16f39a354ff0deb48f8d5464f9.jpg?i="+Math.random(),"text":"我是一张图片"},
                {"url":"http://imgsrc.baidu.com/forum/w%3D580/sign=5a87accf2c2eb938ec6d7afae56285fe/9578a6efce1b9d16f39a354ff0deb48f8d5464f9.jpg?i="+Math.random(),"text":"我是一张图片"},
                {"url":"http://imgsrc.baidu.com/forum/w%3D580/sign=5a87accf2c2eb938ec6d7afae56285fe/9578a6efce1b9d16f39a354ff0deb48f8d5464f9.jpg?i="+Math.random(),"text":"我是一张图片"},
                {"url":"http://imgsrc.baidu.com/forum/w%3D580/sign=5a87accf2c2eb938ec6d7afae56285fe/9578a6efce1b9d16f39a354ff0deb48f8d5464f9.jpg?i="+Math.random(),"text":"我是一张图片"},
                {"url":"http://imgsrc.baidu.com/forum/w%3D580/sign=5a87accf2c2eb938ec6d7afae56285fe/9578a6efce1b9d16f39a354ff0deb48f8d5464f9.jpg?i="+Math.random(),"text":"我是一张图片"},
                {"url":"http://imgsrc.baidu.com/forum/w%3D580/sign=5a87accf2c2eb938ec6d7afae56285fe/9578a6efce1b9d16f39a354ff0deb48f8d5464f9.jpg?i="+Math.random(),"text":"我是一张图片"},
                {"url":"http://imgsrc.baidu.com/forum/w%3D580/sign=5a87accf2c2eb938ec6d7afae56285fe/9578a6efce1b9d16f39a354ff0deb48f8d5464f9.jpg?i="+Math.random(),"text":"我是一张图片"},
                {"url":"http://imgsrc.baidu.com/forum/w%3D580/sign=5a87accf2c2eb938ec6d7afae56285fe/9578a6efce1b9d16f39a354ff0deb48f8d5464f9.jpg?i="+Math.random(),"text":"我是一张图片"},
                {"url":"http://imgsrc.baidu.com/forum/w%3D580/sign=5a87accf2c2eb938ec6d7afae56285fe/9578a6efce1b9d16f39a354ff0deb48f8d5464f9.jpg?i="+Math.random(),"text":"我是一张图片"},
                {"url":"http://imgsrc.baidu.com/forum/w%3D580/sign=5a87accf2c2eb938ec6d7afae56285fe/9578a6efce1b9d16f39a354ff0deb48f8d5464f9.jpg?i="+Math.random(),"text":"我是一张图片"},
                {"url":"http://imgsrc.baidu.com/forum/w%3D580/sign=5a87accf2c2eb938ec6d7afae56285fe/9578a6efce1b9d16f39a354ff0deb48f8d5464f9.jpg?i="+Math.random(),"text":"我是一张图片"}
            ]
        }
        this.setState({
            data : data
        })
    }

    renderRow(row) {
        return (
            <View style={{flex:1 , height:80 , backgroundColor : "#cfcfcf",justifyContent:"center",alignItems : "center",flexDirection:"row"}}>
                <Image
                    source={localImage}
                    style={{width: 100, height: 70,paddingLeft:10}}
                    indicator={Progress.CircleSnail}
                    indicatorProps={{
                        size: 40,
                        color: '#2336d6',
                        unfilledColor: 'rgba(200, 200, 200, 0.2)'
                    }}
                />
                <Text style={{flex:1,backgroundColor:"#eee",height:70,paddingLeft:20,paddingRight:10,paddingTop:15,justifyContent:"center"}}>
                    {row.text}
                </Text>
            </View>
        )
    }

    refresh(callBack){
        this.data = {
            code: 0,
            data: [
                {"url":"http://imgsrc.baidu.com/forum/w%3D580/sign=5a87accf2c2eb938ec6d7afae56285fe/9578a6efce1b9d16f39a354ff0deb48f8d5464f9.jpg?i="+Math.random(),"text":"我是一张图片"},
                {"url":"http://imgsrc.baidu.com/forum/w%3D580/sign=5a87accf2c2eb938ec6d7afae56285fe/9578a6efce1b9d16f39a354ff0deb48f8d5464f9.jpg?i="+Math.random(),"text":"我是一张图片"},
                {"url":"http://imgsrc.baidu.com/forum/w%3D580/sign=5a87accf2c2eb938ec6d7afae56285fe/9578a6efce1b9d16f39a354ff0deb48f8d5464f9.jpg?i="+Math.random(),"text":"我是一张图片"},
                {"url":"http://imgsrc.baidu.com/forum/w%3D580/sign=5a87accf2c2eb938ec6d7afae56285fe/9578a6efce1b9d16f39a354ff0deb48f8d5464f9.jpg?i="+Math.random(),"text":"我是一张图片"},
                {"url":"http://imgsrc.baidu.com/forum/w%3D580/sign=5a87accf2c2eb938ec6d7afae56285fe/9578a6efce1b9d16f39a354ff0deb48f8d5464f9.jpg?i="+Math.random(),"text":"我是一张图片"},
                {"url":"http://imgsrc.baidu.com/forum/w%3D580/sign=5a87accf2c2eb938ec6d7afae56285fe/9578a6efce1b9d16f39a354ff0deb48f8d5464f9.jpg?i="+Math.random(),"text":"我是一张图片"},
                {"url":"http://imgsrc.baidu.com/forum/w%3D580/sign=5a87accf2c2eb938ec6d7afae56285fe/9578a6efce1b9d16f39a354ff0deb48f8d5464f9.jpg?i="+Math.random(),"text":"我是一张图片"},
                {"url":"http://imgsrc.baidu.com/forum/w%3D580/sign=5a87accf2c2eb938ec6d7afae56285fe/9578a6efce1b9d16f39a354ff0deb48f8d5464f9.jpg?i="+Math.random(),"text":"我是一张图片"},
                {"url":"http://imgsrc.baidu.com/forum/w%3D580/sign=5a87accf2c2eb938ec6d7afae56285fe/9578a6efce1b9d16f39a354ff0deb48f8d5464f9.jpg?i="+Math.random(),"text":"我是一张图片"},
                {"url":"http://imgsrc.baidu.com/forum/w%3D580/sign=5a87accf2c2eb938ec6d7afae56285fe/9578a6efce1b9d16f39a354ff0deb48f8d5464f9.jpg?i="+Math.random(),"text":"我是一张图片"},
                {"url":"http://imgsrc.baidu.com/forum/w%3D580/sign=5a87accf2c2eb938ec6d7afae56285fe/9578a6efce1b9d16f39a354ff0deb48f8d5464f9.jpg?i="+Math.random(),"text":"我是一张图片"}
            ]
        }
        callBack(this.data)
    }

    loadMore(callBack){
        this.data = {
            code: 0,
            data: [
                {"url":"http://imgsrc.baidu.com/forum/w%3D580/sign=5a87accf2c2eb938ec6d7afae56285fe/9578a6efce1b9d16f39a354ff0deb48f8d5464f9.jpg?i="+Math.random(),"text":"我是一张图片"},
                {"url":"http://imgsrc.baidu.com/forum/w%3D580/sign=5a87accf2c2eb938ec6d7afae56285fe/9578a6efce1b9d16f39a354ff0deb48f8d5464f9.jpg?i="+Math.random(),"text":"我是一张图片"},
                {"url":"http://imgsrc.baidu.com/forum/w%3D580/sign=5a87accf2c2eb938ec6d7afae56285fe/9578a6efce1b9d16f39a354ff0deb48f8d5464f9.jpg?i="+Math.random(),"text":"我是一张图片"},
                {"url":"http://imgsrc.baidu.com/forum/w%3D580/sign=5a87accf2c2eb938ec6d7afae56285fe/9578a6efce1b9d16f39a354ff0deb48f8d5464f9.jpg?i="+Math.random(),"text":"我是一张图片"},
                {"url":"http://imgsrc.baidu.com/forum/w%3D580/sign=5a87accf2c2eb938ec6d7afae56285fe/9578a6efce1b9d16f39a354ff0deb48f8d5464f9.jpg?i="+Math.random(),"text":"我是一张图片"}
            ]
        }
        callBack(this.data)
    }
    render() {
        return (
            <View style={{flex : 1 ,backgroundColor:"white"}}>
                {
                    this.state.data ?
                        <ListView renderRow={this.renderRow.bind(this)}
                                  dataRows={this.state.data}
                                  isRefresh={this.state.isRefresh}
                                  refresh={this.refresh.bind(this)}
                                  loadMore={this.loadMore.bind(this)}
                                  pageSize={this.state.pageSize}
                        />
                        :
                        null
                }
            </View>
        )
    }
}