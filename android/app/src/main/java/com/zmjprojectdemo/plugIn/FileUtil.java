package com.zmjprojectdemo.plugIn;

import android.app.Activity;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.net.Uri;
import android.util.Base64;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.BaseActivityEventListener;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.io.IOException;

/**
 * Created by zmj on 2017/4/20.
 */

@ReactModule(name = "FileUtil")
public class FileUtil extends ReactContextBaseJavaModule {

    private static final int IMAGE_PICKER_REQUEST = 1000;
    private static final String E_ACTIVITY_DOES_NOT_EXIST = "E_ACTIVITY_DOES_NOT_EXIST";
    private static final String E_PICKER_CANCELLED = "E_PICKER_CANCELLED";
    private static final String E_FAILED_TO_SHOW_PICKER = "E_FAILED_TO_SHOW_PICKER";
    private static final String E_NO_IMAGE_DATA_FOUND = "E_NO_IMAGE_DATA_FOUND";

    private Promise mPickerPromise;

    private final ActivityEventListener mActivityEventListener = new BaseActivityEventListener() {

        @Override
        public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent intent) {
            if (requestCode == IMAGE_PICKER_REQUEST) {
                if (mPickerPromise != null) {
                    if (resultCode == Activity.RESULT_CANCELED) {
                        mPickerPromise.reject(E_PICKER_CANCELLED, "Image picker was cancelled");
                    } else if (resultCode == Activity.RESULT_OK) {
                        Uri uri = intent.getData();

                        if (uri == null) {
                            mPickerPromise.reject(E_NO_IMAGE_DATA_FOUND, "No image data found");
                        } else {
                            JSONObject object = new JSONObject();
                            try {
                                object.put("fileUrl", uri.toString());
                                mPickerPromise.resolve(object.toString());
                            } catch (JSONException e) {
                                e.printStackTrace();
                            }
                        }
                    }

                    mPickerPromise = null;
                }
            }
        }
    };

    public FileUtil(ReactApplicationContext reactContext) {
        super(reactContext);

        // Add the listener for `onActivityResult`
        reactContext.addActivityEventListener(mActivityEventListener);
    }

    @Override
    public String getName() {
        return "FileUtil";
    }

    @ReactMethod
    public void fileSelect(final Promise promise) {
        Activity currentActivity = getCurrentActivity();

        if (currentActivity == null) {
            promise.reject(E_ACTIVITY_DOES_NOT_EXIST, "Activity doesn't exist");
            return;
        }

        // Store the promise to resolve/reject when picker returns data
        mPickerPromise = promise;

        try {
            final Intent galleryIntent = new Intent(Intent.ACTION_GET_CONTENT);

            galleryIntent.setType("*/*");

            final Intent chooserIntent = Intent.createChooser(galleryIntent, "Pick an image");

            currentActivity.startActivityForResult(chooserIntent, IMAGE_PICKER_REQUEST);
        } catch (Exception e) {
            mPickerPromise.reject(E_FAILED_TO_SHOW_PICKER, e);
            mPickerPromise = null;
        }
    }

    /**
     * @param imgPath
     * @return
     */
    public String imgToBase64(String imgPath, String imgFormat) {
        Bitmap bitmap = null;
        if (imgPath != null && imgPath.length() > 0) {
            bitmap = readBitmap(imgPath);
        }
        if (bitmap == null) {
            return "文件转换失败";
        }
        ByteArrayOutputStream out = null;
        try {
            out = new ByteArrayOutputStream();
            if (imgFormat.toLowerCase().equals("png")) {
                bitmap.compress(Bitmap.CompressFormat.PNG, 100, out);
            }
            if (imgFormat.toLowerCase().equals("jpeg")) {
                bitmap.compress(Bitmap.CompressFormat.JPEG, 100, out);
            }
            if (imgFormat.toLowerCase().equals("webp")) {
                bitmap.compress(Bitmap.CompressFormat.WEBP, 100, out);
            }

            out.flush();
            out.close();

            byte[] imgBytes = out.toByteArray();
            return Base64.encodeToString(imgBytes, Base64.DEFAULT);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            return null;
        } finally {
            try {
                out.flush();
                out.close();
            } catch (IOException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
        }
    }

    private Bitmap readBitmap(String imgPath) {
        try {
            return BitmapFactory.decodeFile(imgPath);
        } catch (Exception e) {
            // TODO Auto-generated catch block
        }
        return null;
    }

}
