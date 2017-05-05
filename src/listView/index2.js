/**
 * Created by zmj on 2017/3/21.
 */
import React from "react" ;
import {
    ListView,
    RefreshControl,
    Text,
    View,
    ActivityIndicator,
    TouchableOpacity
} from "react-native" ;
import styles from "./index.css" ;
import Image from 'react-native-image-progress' ;
import * as Progress from 'react-native-progress' ;
let allRows;
export default class index extends React.Component {
    /**
     * 默认数据
     * @type {{style: null, dataRows: {code: number, data: Array, message: Array}}}
     */
    static defaultProps = {
        style: null,
        emptyStyle: styles.emptyView,
        //初始化数据结构
        dataRows: {
            code: 0,               //0:数据成功 1:数据为空 2: 网络连接失败
            data: [],
            message: "",
            url: ""                //错误图片显示
        },
        isRefresh : false,
        pageSize : 1                //每行显示几条数据
    } ;

    /**
     * 定义数据类型
     * @type {{refresh: *, loadMore: *, renderRow: *, dataRows: *}}
     */
    static propTypes = {
        refresh: React.PropTypes.func,
        loadMore: React.PropTypes.func,
        renderRow: React.PropTypes.func,
    } ;

    /**
     * 初始化
     * @param props
     */
    constructor(props) {
        super(props) ;
        let rows = this.props.dataRows.data;
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        if (rows && rows.length > 0) {
            this.ds = this.ds.cloneWithRows(rows) ;
            allRows = rows;
        }
        this.initData(this)
    }

    /**
     * 数据初始化
     * @param _this
     */
    initData(_this) {
        _this.state = ({
            isRefreshing: false,
            dataRows: _this.ds,
            loaded: 0,
            indicator: false,
            empty: false,
            loadMoreFlag: false,
            isFirstEndReach: false,
            isNoMore: false,
            code: _this.props.dataRows.code,
            message: _this.props.dataRows.message,
            url: _this.props.dataRows.url
        })
    }

    /**
     * 行数据渲染
     * @param data
     * @returns {XML}
     */
    renderRow(data) {
        if (this.props.renderRow) {
            return this.props.renderRow(data);
        }
        return <Text>{JSON.stringify(data)}</Text>;
    }

    /**
     * 下拉刷新
     */
    refresh() {
        let _this = this ;
        this.initData(_this) ;
        if (_this.props.refresh) {
            _this.setState({
                isRefreshing: true,
            }) ;
            _this.props.refresh(function (resultData) {
                allRows = resultData.data;
                _this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                _this.ds = _this.ds.cloneWithRows(resultData.data) ;
                _this.setState({
                    isRefreshing: false,
                    dataRows: _this.ds,
                    code: resultData.code,
                    message: resultData.message,
                    url: resultData.url
                })
            });
        }
    }

    /**
     * 上拉加载更多
     * @returns {null}
     */
    loadMore() {
        let _this = this ;
        if (_this.state.isNoMore) {
            return null;
        }
        if (_this.props.loadMore) {
            _this.setState({
                indicator: true,
                loadMoreFlag: true
            }) ;
            _this.props.loadMore(function (resultData) {
                if (Number.parseInt(resultData.code) === 1) {
                    _this.setState({
                        isNoMore: true,
                        indicator: false,
                        loadMoreFlag: false,
                    }) ;
                    return null;
                }
                if (resultData.data && resultData.data.length > 0) {
                    allRows = allRows.concat(resultData.data);
                    _this.setState({
                        dataRows: _this.state.dataRows.cloneWithRows(allRows),
                        indicator: false,
                        loadMoreFlag: false,
                        isFirstEndReach: false,
                        code: resultData.code,
                        message: resultData.message,
                        url: resultData.url
                    })
                }
            });
        }
    }

    /**
     * 滑动（每滑动一帧触发）
     */
    onScroll() {
    }

    /**
     * 滑动到底部触发事件
     */
    onEndReached() {
        //下滑到底部这个方法会触发两次
        //当第二次触发时
        if (this.state.isFirstEndReach) {
            this.setState({
                isFirstEndReach: true
            }) ;
            return
        }
        if (!this.state.isFirstEndReach && !this.state.loadMoreFlag) {
            this.loadMore()
        }
    }

    /**
     * 网络失败
     * @returns {XML}
     */
    netWorkError() {
        return (
            <View style={this.props.emptyStyle}>
                {this.createImageView(this.state.url)}
                <Text>{this.state.message ? this.state.message : "网络连接失败,请检查网络"}</Text>
                <TouchableOpacity style={{marginTop: 50}} onPress={this.checkNetWork.bind(this)}>
                    <Text style={{color: "#208ed9"}}>网络设置</Text>
                </TouchableOpacity>
            </View>
        )
    }

    /**
     * 无数据
     * @returns {XML}
     */
    empty() {
        return (
            <View style={this.props.emptyStyle}>
                {this.createImageView(this.state.url)}
                <Text>{this.state.message ? this.state.message : "暂无数据"}</Text>
                <TouchableOpacity style={{marginTop: 50}} onPress={this.refresh.bind(this)}>
                    <Text style={{color: "#208ed9"}}>点击刷新</Text>
                </TouchableOpacity>
            </View>
        )
    }

    /**
     * 创建图片界面
     * @param url
     * @returns {*}
     */
    createImageView(url) {
        let imageView = null ;
        if (url) {
            if (url.toString().startsWith("http") > 0) {
                imageView =
                    <Image
                        source={{uri: url}}
                        style={{width: 200, height: 200, top : -20}}
                        indicator={Progress.CircleSnail}
                        indicatorProps={{
                            size: 40,
                            color: '#2336d6',
                            unfilledColor: 'rgba(200, 200, 200, 0.2)'
                        }}
                    />
            } else {
                imageView = <Image source={this.state.url} style={{width: 200, height: 200,top : -20}}/>
            }
        }
        return imageView
    }

    /**
     * 启动网络设置界面
     */
    checkNetWork() {
        //myPlugIn.openNetWorKSetting()
    }

    /**
     * 界面绘制
     * @returns {XML}
     */
    render() {
        if (this.state.code === 1) {
            return this.empty()
        }
        if (this.state.code === 2) {
            return this.netWorkError()
        }
        if (this.state.code === 0) {
            if (!this.state.dataRows || this.state.dataRows.getRowCount() === 0) {
                return this.empty()
            }
            return (
                <View style={styles.view}>
                    <ListView
                        ref={(c) => this.listView = c}
                        horizontal={false}
                        initialListSize={5}
                        renderRow={this.renderRow.bind(this)}
                        dataSource={this.state.dataRows}
                        style={this.props.style}
                        pageSize={this.props.pageSize}
                        onScroll={this.onScroll.bind(this)}
                        onEndReachedThreshold={50}
                        enableEmptySections={true}
                        onEndReached={this.onEndReached.bind(this)}
                        refreshControl={this.props.isRefresh?
                            <RefreshControl
                                refreshing={this.state.isRefreshing}
                                onRefresh={this.refresh.bind(this)}
                            />:
                            null
                        }
                    >
                    </ListView>
                    {this.state.indicator? <ActivityIndicator style={styles.indicator}/> : null }
                </View>
            )
        }
    }
}
