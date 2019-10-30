/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  TextInput,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends Component {
  constructor () {
    super()
    this.state = { }
    this.buttonPressed = this.buttonPressed.bind(this)
  }
buttonPressed() {
  console.log(this.state.username , this.state.password)
  
}
render() {
  return (
    <>
      <StatusBar barStyle= "dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <Text style={styles.sectionContainer} >User Name</Text>
            <TextInput 
              defaultValue = {this.state.username}
              onChangeText = {text => {this.setState({username:text})}}
            />
          </View>
            
          <View style={styles.body}>
            <Text style={styles.sectionContainer} >Password</Text>
            <TextInput 
              defaultValue = {this.state.password}
              onChangeText = {text => {this.setState({password: text})}}
            />
          </View>
          <Button title={"Hello"} onPress ={this.buttonPressed}/>
        </ScrollView>
      </SafeAreaView>
      </>
  );
};
}
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 75,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
