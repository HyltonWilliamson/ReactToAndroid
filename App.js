import React, { Component } from 'react'
import { NativeModules, 
  StyleSheet, 
  Button,
  View, 
  StatusBar, 
  ImageBackground,
  Text, 
  TouchableOpacity } from 'react-native'


const { SampleModule } = NativeModules;
const colors = {
  background:'#f4f6fc',
  themeColor:'#6143d9',
  white:'#FFFFFF',
  black:'#000000'
}

const App = ({navigation}) => {
  const onPress = () => {
    SampleModule.showYourActivity();
  };

  return (
    <View
      style = {{
        flex:1, 
        backgroundColor:colors.themeColor
      }}>
      <StatusBar barStyle='light-content' backgroundColor = {colors.themeColor}></StatusBar> 
      <ImageBackground source= {require('./images/bgi.jpg')} style={styles.image}>
      <View>
          <Text style = {styles.text}>React To Android Demo</Text>
        </View>
      <View style = {{
        justifyContent:"center",
        paddingTop: 250
      }}>
        <TouchableOpacity
          style={styles.appButtonContainer}
          color="#000000"
          onPress={onPress}>
        <Text style={styles.appButtonText}>Begin</Text>
        </TouchableOpacity>
        <View style={styles.space} />
        <TouchableOpacity
          style={styles.appButtonContainer}
          color="#000000"
          onPress={onPress}>
        <Text style={styles.appButtonText}>Settings</Text>
        </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    //justifyContent:"center"
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign:"center",
    paddingTop:50
  },
  appButtonContainer: {
    //elevation: 8,
    flex:1,
    backgroundColor: "#fff",
    justifyContent:"center",
    borderRadius: 20,
    paddingVertical: 25,
    paddingHorizontal: 30,
    
    marginRight:100,
    marginLeft:100
  },
  appButtonText: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  space: {
    width: 20, 
    height: 20,
  }

});

export default App
