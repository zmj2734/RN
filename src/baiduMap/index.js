import React from 'react';
import {
    MapView,
    MapTypes,
    Geolocation,
    MapModule
} from 'react-native-baidu-map';

import {
    StyleSheet,
    View,
} from 'react-native';

import Dimensions from 'Dimensions';

export default class BaiduMapView extends React.Component {
    static defaultProps = {
        mayType: MapTypes.NORMAL,
        zoomControlsVisible: true,
        zoom: 15,
        center: {
            longitude: 116.403945,
            latitude: 39.91506
        },
        trafficEnabled: true,               //是否显示路况图层
        baiduHeatMapEnabled: false,
        markers: [{
            longitude: 116.403945,
            latitude: 39.91506,
            title: "你当前的位置"
        }]
    }

    static propTypes = {
        mayType : React.PropTypes.number,
        zoomControlsVisible : React.PropTypes.bool,
        trafficEnabled : React.PropTypes.bool,
        baiduHeatMapEnabled : React.PropTypes.bool,
        zoom : React.PropTypes.number,
        center : React.PropTypes.object ,
        markers :  React.PropTypes.array,
        onMarkerClick : React.PropTypes.func ,
        onMapClick : React.PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {
            zoom: this.props.zoom,
            center: this.props.center,
            markers: this.props.markers
        }
    }

    componentDidMount() {
        let _this = this ;
        Geolocation.getCurrentPosition().then(position => {
            _this.setState({
                zoom: 19,
                center: {
                    longitude: position.longitude,
                    latitude: position.latitude
                },
                markers: [{
                    longitude: position.longitude,
                    latitude: position.latitude,
                    title: position.address                      //title赋值第一次点击会报错
                }]
            })
        }).catch(e => {
        });
    }

    onMarkerClick(e){
        if(this.props.onMarkerClick){
            return this.props.onMarkerClick(e) ;
        }
    }

    onMapClick(e){
        if(this.props.onMapClick){
            return this.props.onMapClick(e) ;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    ref={(c) => this.mapView = c}
                    style={styles.map}
                    trafficEnabled={this.props.trafficEnabled}
                    baiduHeatMapEnabled={this.props.baiduHeatMapEnabled}
                    zoomControlsVisible={this.props.zoomControlsVisible}
                    zoom={this.state.zoom}
                    mapType={this.props.mapType}
                    center={this.state.center}
                    markers={this.state.markers}
                    onMarkerClick={this.onMarkerClick.bind(this)}
                    onMapClick={this.onMapClick.bind(this)}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    map: {
        width: "100%",
        height: "100%" ,
    }
});