/**
 * Created by zmj on 2017/3/7.
 */
import {
    StyleSheet,
    Dimensions
} from 'react-native';

export default StyleSheet.create({
    webView: {
        flex: 1,
    },
    loadingView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').height,
    },
    fullWidth: {
        width: Dimensions.get("window").width,
        height: 2,
    }
});