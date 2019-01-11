import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { application } from "kotlin-domained-rn-domain";

export default class App extends React.Component {
  render() {
    const service = new application.Service();
    const person = service.iam();
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>service: {service.hello()}</Text>
        <Text>name: {person.name}, age: {person.age}, address: {person.address()}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
