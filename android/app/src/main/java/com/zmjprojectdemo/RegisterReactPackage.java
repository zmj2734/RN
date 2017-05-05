package com.zmjprojectdemo;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.zmjprojectdemo.plugIn.FileUtil;
import com.zmjprojectdemo.plugIn.NetWorkSetting;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * 注册模块
 * Created by zmj on 2017/4/17.
 */

public class RegisterReactPackage implements ReactPackage {
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>() ;
        modules.add(new NetWorkSetting(reactContext));
        modules.add(new FileUtil(reactContext));
        return modules;
    }

    @Override
    public List<Class<? extends JavaScriptModule>> createJSModules() {
        return Collections.emptyList();
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}
