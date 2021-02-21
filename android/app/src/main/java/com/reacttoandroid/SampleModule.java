package com.reacttoandroid;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;

import android.content.Intent;
import android.util.Log;

public class SampleModule extends ReactContextBaseJavaModule{
    SampleModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "SampleModule";
    }

    @ReactMethod
    public void showYourActivity() {
        ReactApplicationContext context = getReactApplicationContext();
        Intent intent = new Intent(context, BasicActivity.class);
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        context.startActivity(intent);
    }
}
