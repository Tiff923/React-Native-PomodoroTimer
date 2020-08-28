import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import PomodoroTimer from './components/PomodoroTimer';

export default class App extends React.Component{
    
  render(){
    console.log('hello')
    return(
      <View style={styles.container}>
        <PomodoroTimer/>
      </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});