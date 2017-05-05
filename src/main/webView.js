/**
 * Created by zmj on 2017/4/26.
 */

import React from "react"
import WebView from "../webView"

export default class webView extends React.Component{
    onMessage(event){
        //在这处理你的事件  RN与原生交互
        alert(event.nativeEvent.data)
    }
    render(){
        return(
            <WebView url="https://www.baidu.com/" onMessage = {this.onMessage.bind(this)} {...this.props}/>
        )
    }
}

