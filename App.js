import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, Dimensions } from 'react-native';
import { TextInput } from 'react-native-paper';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.colors = {
      // darkPrimary: '#7B1FA2',
      // defaultPrimary: '#9C27B0',
      // 'light-primary': '#E1BEE7',
      // 'text-primary': '#FFFFFF',
      // 'accent-color': '#7C4DFF',
      // 'primary-text': '#212121',
      // 'secondary-text': '#757575',
      // 'divider-color': '#BDBDBD',
    };
    this.colors.defaultPrimary = '#9C27B0';
    this.state = {};

    this.onChangeText = text => {
      this.setState({ valorEmReal: text });
    };

    this.getEuro = () => {
      let real = this.state.valorEmReal;
      let euro = real / 5.22;
      return isNaN(euro) ? 0 : euro.toFixed(2);
    };

    this.getDolar = () => {
      let real = this.state.valorEmReal;
      let dolar = real / 4.66;
      return isNaN(dolar) ? 0 : dolar.toFixed(2);
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}> Conversor de Moedas </Text>
        </View>
        <Text style={styles.h2}> Qual o Valor em REAL? </Text>
        <TextInput
          style={{ height: 40 }}
          onChangeText={text => this.onChangeText(text)}
          value={this.state.valorEmReal}
          selectionColor={'#000'}
          underlineColor={colors.accentColor}
        />
        <Text style={styles.h2}>Valor em dolar </Text>
        <Text style={styles.valores}> {this.getDolar()} </Text>
        <Text style={styles.h2}>Valor em euro</Text>
        <Text style={styles.valores}> {this.getEuro()} </Text>
      </View>
    );
  }
}

const colors = {
  darkPrimary: '#7B1FA2',
  defaultPrimary: '#9C27B0',
  lightPrimary: '#E1BEE7',
  textPrimary: '#FFFFFF',
  accentColor: '#7C4DFF',
  primaryText: '#212121',
  secondaryText: '#757575',
  dividerColor: '#BDBDBD',
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "center",
    // alignContent: "center",
    // justifyContent: "center"
  },
  h2: {
    fontSize: 20,
  },

  valores: {
    color: colors.defaultPrimary,
    fontSize: 20,
  },

  header: {
    alignSelf: 'center',
    width: Dimensions.get('window').width,
    height: 80,
    backgroundColor: colors.defaultPrimary,
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerText: {
    color: colors.textPrimary,
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
