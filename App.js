import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, Button, View} from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {resultText: ''};
    this.operations = ['DEL', '+', '-', '*', '/'];
  }
  calculateResult() {
    const text = this.state.resultText;
  }
  buttonPressed(text) {
    if (text === '=') {
      return this.calculateResult();
    }
    this.setState({
      resultText: this.state.resultText + text,
    });
  }
  operate(operation) {
    switch (operation) {
      case 'DEL':
        let text = this.state.resultText.split('')
        text.pop()
        this.setState({
          resultText: text.join(''),
        })
        break
      case '+':
      case '-':
      case '*':
        const lastChar = this.state.resultText.split('').pop()
            if(operation.indexOf(lastChar) > 0) {
            }
            if (this.state.text == "") return
            this.setState({
              resultText: this.state.resultText + operation
            })
    }
  }

  render() {
    let rows = []
    let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['.', 0, '=']];
    for (let i = 0; i < 4; i++) {
      let row = []
      for (let j = 0; j < 3; j++) {
        row.push(
          <TouchableOpacity
            onPress={() => this.buttonPressed(nums[i][j])}
            style={styles.btn}>
            <Text style={styles.btnNext}>{nums[i][j]}</Text>
          </TouchableOpacity>,
        );
      }
      rows.push(<View style={styles.row}>{row}</View>);
    }

    let ops = []
    for (let i = 0; i < 5; i++) {
      ops.push(
        <TouchableOpacity
          onPress={() => this.operate(this.operations[i])}
          style={styles.btn}>
          <Text style={[styles.btnNext, styles.whiteText]}>
            {this.operations[i]}
          </Text>
        </TouchableOpacity>,
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>{this.state.resultText}</Text>
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
