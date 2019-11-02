import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, Button, View} from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    let rows = []
    let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['.', 0, '=']];
    for (let i = 0; i < 4; i++) {
      let row = []
      for (let j = 0; j < 3; j++) {
        row.push(
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnNext}>{nums[i][j]}</Text>
          </TouchableOpacity>,
        );
      }
      rows.push(<View style={styles.row}>{row}</View>);
    }

    let operations = ['+', '-', '*', '/']
    let ops = []
    for (let i = 0; i < 4; i++) {
      ops.push(
        <TouchableOpacity style={styles.btn}>
          <Text style={[styles.btnNext, styles.whiteText]}>
            {operations[i]}
          </Text>
        </TouchableOpacity>,
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>8*8</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calText}>64</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>{rows}</View>
          <View style={styles.operation}>{ops}</View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnNext: {
    fontSize: 30,
  },
  whiteText: {
    color: 'white',
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  resultText: {
    fontSize: 25,
    color: 'white',
  },
  calText: {
    fontSize: 22,
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
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  calculation: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'flex-end',
    justifyContent: 'center',
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
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
});
