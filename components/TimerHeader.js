import React from 'react'; 
import {Text} from 'react-native'

class TimerHeader extends React.Component{
    displayHeader(){
        console.log("displayHeader")
        if(this.props.period == 'Study'){
            if(this.props.running == true){
                return 'Hwaiting!!'
            }else{
                return 'Go Studyyy'
            }
        }else{
            if(this.props.running == true){
                return 'Have a good break :)'
            }else{
                return 'Dont procrastinate ;('
            }
        }
    }
    render(){
        console.log("render TimerHeader")
        let header = this.displayHeader()
        return (
            <Text>{header}</Text>
        )
    }
}

export default TimerHeader