import React from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native'

class TimerInput extends React.Component{

    render(){
        console.log("render TimerInput")
        return(
        <>
            <View style={styles.sideBySide}>
                <Text>Study Time: </Text>
                <TextInput style={styles.textInput}/>
                <Text>mins</Text>
            </View>
            <View style={styles.sideBySide}>
                <Text>Break Time: </Text>
                <TextInput style={styles.textInput}/>
                <Text>mins</Text>
            </View>
        </>
        )
    }
}

const styles = StyleSheet.create({

    textInput: {
      height: 40,  
      width: 100, 
      borderColor: 'red',
      borderWidth: 1
    }, 

    sideBySide:{
        flexDirection:'row'
    }
    })

export default TimerInput