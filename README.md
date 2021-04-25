# Connecting React Native Screens to Android Activities

 ## React Native
 ### Create React Native Project
 Download and install React Native from here:
 [React Native · A framework for building native apps using React](https://reactnative.dev/)
 - Open command prompt to where you want to create your react native project then type: "**npx react-native init ProjectName**"
## Android Stuido
 Download and install Android Studio from here:
 [Download Android Studio and SDK tools | Android Developers](https://developer.android.com/studio)
 ### Prep
 - Open the android folder of the React Native project you just made and wait for the project to be built
 - Now open the "**gradle-wrapper.properties**" file from the Gradle Scripts section and change the gradle to 6.3 at least. I used **6.7.1-all**
### Android Classes
 - Navigate to your android project folder(where the mainActivity.java is) and create an activity. Make sure to add 
 ```java
 @CallSuper
 ```
  on your **onCreate** method.(This will be the activity that you will navigate to from the react native screen.)
 - Now create a java class, this will be the native module React Native will access and can hold your methods. Check [**sampleModule.java**](https://github.com/HyltonWilliamson/ReactToAndroid/blob/master/android/app/src/main/java/com/reacttoandroid/SampleModule.java) for a basic setup.
```java
@ReactMethod
public void showYourActivity() {
	ReactApplicationContext context = getReactApplicationContext();
	Intent intent = new Intent(context, BasicActivity.class);
	intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
	context.startActivity(intent);
} 
 ```
 - Create another class, this one will package/hold your native module classes. Check [**MyAppPackage.java**](https://github.com/HyltonWilliamson/ReactToAndroid/blob/master/android/app/src/main/java/com/reacttoandroid/MyAppPackage.java). You can add more modules in the **createNativeModules** method.
 ```java
@Override
public List<NativeModule> createNativeModules(
	ReactApplicationContext reactContext) {
	List<NativeModule> modules = new ArrayList<>();
	modules.add(new SampleModule(reactContext));
	return modules;
}
 ```
 - Finally, navigate to your **MainApplication.java**, which was made when you created your React Native project and add your package to the **getPackages** method. For example:
```java
packages.add(new  MyAppPackage());
```
## Back to React Native
### Connecting the Native Modules
- Import **NavtiveModules** from react-native. 
- You can how access your native module methods with 
```js
NativeModules.modulesName.method()
```
or if you add a constant like
```js
const { modulesName } = NativeModules
```
 you can access them with 
 ```js
 modulesName.method()
 ```
 - Using a Button or TouchableOpacity, in the onPress you can use your implementation of choice for accessing your native modules.
