// App.js
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ButtonComponent from './components/ButtonComponent'; // Import component con

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: '#fff',
      message: '',
    };
  }

  handlePress = (color, message) => {
    this.setState({ bgColor: color, message: message });
    alert(`Bạn đã nhấn nút có màu ${color}`);
  };

  handleReset = () => {
    this.setState({ bgColor: '#fff', message: '' });
  };

  getTextColor = () => {
    return this.state.bgColor === 'black' ? 'white' : 'black';
  };

  render() {
    return (
      <View style={[styles.container, { backgroundColor: this.state.bgColor }]}>
        <Text style={[styles.messageText, { color: this.getTextColor() }]}>{this.state.message}</Text>
        <ButtonComponent title="GREEN" onPress={() => this.handlePress('green', "I'm Green !")} color="green" textColor="white" />
        <ButtonComponent title="BLUE" onPress={() => this.handlePress('blue', "I'm Blue !")} color="blue" textColor="white" />
        <ButtonComponent title="BROWN" onPress={() => this.handlePress('brown', "I'm Brown !")} color="brown" textColor="white" />
        <ButtonComponent title="YELLOW" onPress={() => this.handlePress('yellow', "I'm Yellow !")} color="yellow" textColor="black" />
        <ButtonComponent title="RED" onPress={() => this.handlePress('red', "I'm Red !")} color="red" textColor="white" />
        <ButtonComponent title="BLACK" onPress={() => this.handlePress('black', "I'm Black !")} color="black" textColor="white" />
        <View style={styles.resetContainer}>
          <ButtonComponent title="RESET" onPress={this.handleReset} color="gray" textColor="white" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  messageText: {
    fontSize: 24,
    marginBottom: 20,
  },
  resetContainer: {
    marginTop: 40, // Tạo khoảng cách lớn hơn giữa nút "RESET" và các nút khác
  },
});

export default App;
