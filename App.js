/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  Linking,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import AsyncStorage from '@react-native-community/async-storage';
import QRCode from 'react-native-qrcode';
import QRCodeScanner from 'react-native-qrcode-scanner';

const App = () => {
  function onSuccess(e){
    Linking
      .openURL(e.data)
      .catch(err => console.error('An error occured', err));
  }

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <QRCodeScanner
              onRead={this.onSuccess}
              topContent={
                <Text style={styles.centerText}>
                  Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
                </Text>
              }
              bottomContent={
                <TouchableOpacity style={styles.buttonTouchable}>
                  <Text style={styles.buttonText}>OK. Got it!</Text>
                </TouchableOpacity>
              }
            />
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>See Your Changes</Text>
            <Text style={styles.sectionDescription}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => this.setState({text: text})}
              value={this.state.text}
            />
            <QRCode
              value={this.state.text}
              size={200}
              bgColor='purple'
              fgColor='white'/>
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

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
    paddingHorizontal: 24,
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
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    padding: 5,
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default App;