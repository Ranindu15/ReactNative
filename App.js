import React, {Component} from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.result} />
        <View style={styles.calculation} />
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            <View style={styles.row}>
              <Button title="0" />
              <Button title="0" />
              <Button title="0" />
            </View>
            <View style={styles.row}>
              <Button title="0" />
              <Button title="0" />
              <Button title="0" />
            </View>
            <View style={styles.row}>
              <Button title="0" />
              <Button title="0" />
              <Button title="0" />
            </View>
          </View>
          <View style={styles.operation} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  result: {
    flex: 2,
    backgroundColor: 'red',
  },
  calculation: {
    flex: 1,
    backgroundColor: 'green',
  },
  buttons: {
    flexGrow: 7,
    flexDirection: 'row',
  },
  numbers: {
    flex: 3,
    backgroundColor: 'yellow',
  },
  operation: {
    flex: 1,
    backgroundColor: 'black',
  },
});
