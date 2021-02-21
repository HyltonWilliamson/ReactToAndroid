# Connecting React Native Screens to Android Activities

 ## React Native
 ### Create React Native Project
 Download and install React Native from here:
 [React Native · A framework for building native apps using React](https://reactnative.dev/)
 - Open command prompt to where youwant to create your react native project then type: "**npx react-native init ProjectName**"
## Android Stuido
 Download and install Android Studio from here:
 [Download Android Studio and SDK tools | Android Developers](https://developer.android.com/studio)
 ### Prep
 - Open the android folder of the React Native project you just made and wait for the project to be built
 - Now open the "**gradle-wrapper.properties**" file from the Gradle Scripts section and change the gradle to 6.3 at least. I used **6.7.1-all**
### Android Classes
 - Navigate to your android project folder(where the mainActivity.java is) and create an activity. Make sure to add "**@CallSuper**" on your **onCreate** method.(This will be the activity that you will navigate to from the react native screen.)
 - Now create a java class, this will be the native module React Native will access and can hold your methods. Check [**sampleModule.java**](https://github.com/HyltonWilliamson/ReactToAndroid/blob/master/android/app/src/main/java/com/reacttoandroid/SampleModule.java) for a basic setup.
 - Create another class, this one will package/hold your native module classes. Check [**MyAppPackage.java**](https://github.com/HyltonWilliamson/ReactToAndroid/blob/master/android/app/src/main/java/com/reacttoandroid/MyAppPackage.java). You can add more modules in the **createNativeModules** method.
 - Finally, navigate to your **MainApplication.java**, which was made when you created your React Native project and add your package to the **getPackages** method.
## Back to React Native
### Connecting the Native Modules
- Import **NavtiveModules** from react-native. 
- You can how access your native module methods with **NativeModules.modulesName.method()** 
or if you add a constant like
 **const { modulesName } = NativeModules**
 you can access them with **modulesName.method()**
 - Using a Button or TouchableOpacity, in the onPress you can use your implementation of choice for accessing your native modules.