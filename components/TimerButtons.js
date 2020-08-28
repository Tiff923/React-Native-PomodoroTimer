import React from 'react'; 
import { render } from 'react-dom';
import { Button, View, StyleSheet} from 'react-native'

class TimerButtons extends React.Component{
    render(){
        console.log("render TimerButtons")
        if(this.props.running == true){
            return(
                <View style={styles.space}>
                    <Button title='Pause' onPress={this.props.clickPause}/>
                    <Button title='Restart' onPress={this.props.clickRestart}/>
                </View>
            )
        }else{
            return(
                <View style={styles.space}>
                    <Button title='Play' onPress={this.props.clickPlay}/>
                </View> 
            )
        }
    }
}

const styles = StyleSheet.create({
    space: {
        marginBottom:20
    }

})

export default TimerButtons