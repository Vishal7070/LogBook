

import React, { Component, useState } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View, Button, TextInput, Image, Dimensions, SafeAreaView, TouchableOpacity
} from 'react-native';

var logo = require('./Assets/image/logo.png')


class splash extends Component {
  constructor(props)
  {
    super(props)
    setTimeout(()=>{
      this.props.navigation.navigate("login");
    },5000);
  }
  render() {
    return (
      <View style={styles.main}>
      <View>
        <Image source={require('./Assets/image/logo.png')} style={{ width: 80, height: 80, alignSelf: 'center' }} />
        <Text style={styles.txt}>LogBooks PRO</Text>
      </View>
    </View>)
  }

}
const styles=StyleSheet.create({
  main:{
      flex:1, backgroundColor: '#524ae8', justifyContent: 'center'
  },txt:{
      fontSize: 30, color: 'white', fontFamily: 'serif-monospace', marginTop: 10, alignSelf: 'center'
  }
  })
export default splash;
