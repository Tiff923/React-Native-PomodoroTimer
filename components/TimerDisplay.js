import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

class TimerDisplay extends React.Component{
    render(){
        console.log("render TimerDisplay")
        return(
            <View style={styles.containerStyle}>
            <Text style={styles.textStyle}>
            { Math.floor(this.props.timeSec / 60).toString().padStart(2, '0') + 
              ':' + 
              (this.props.timeSec % 60).toString().padStart(2, '0')
            }
            </Text>
            </View>
        )
        
    }
}

const styles = StyleSheet.create({
    containerStyle: {
      marginTop: "7%",
      marginBottom: "5%",
      padding: "15%",
      borderColor: "red",
      borderRadius: 60,
      borderWidth: 3
    },
    textStyle: {
      color: "black",
      fontSize: 50,
      fontWeight: "400"
    }
  });

export default TimerDisplay