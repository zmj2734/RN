package com.zmjprojectdemo.plugIn;

import android.content.ComponentName;
import android.content.Intent;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.UiThreadUtil;
import com.facebook.react.module.annotations.ReactModule;

import java.util.Map;


/**
 * 自定义插件demo
 * Created by zmj on 2017/4/17.
 */
@ReactModule(name = "NetWorkSetting")
public class NetWorkSetting extends ReactContextBaseJavaModule {

    public NetWorkSetting(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    /**
     * 模块名称
     *
     * @return
     */
    @Override
    public String getName() {
        return "NetWorkSetting";
    }

    /**
     * 这里可以写一些初始化自定义属性
     *
     * @return
     */
    @Override
    public Map<String, Object> getConstants() {
        return super.getConstants();
    }


    /**
     * 打开网络设置界面
     */
    @ReactMethod
    public void openNetWorKSetting() {
        UiThreadUtil.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                Intent intent = null;
                //判断手机系统的版本  即API大于10 就是3.0或以上版本
                if (android.os.Build.VERSION.SDK_INT > 10) {
                    intent = new Intent(android.provider.Settings.ACTION_WIRELESS_SETTINGS);
                } else {
                    intent = new Intent();
                    ComponentName component = new ComponentName("com.android.settings", "com.android.settings.WirelessSettings");
                    intent.setComponent(component);
                    intent.setAction("android.intent.action.VIEW");
                }
                intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                getReactApplicationContext().startActivity(intent);
            }
        });
    }
}
