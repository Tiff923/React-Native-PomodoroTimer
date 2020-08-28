import React from 'react';
import Timer from './Timer'

class PomodoroTimer extends React.Component{
    constructor(){
        console.log('constructor PomodoroTimer')
        super()
        this.studyPeriodDuration = 2
        this.breakPeriodDuration = 1
        this.state={
            period:'Study', 
            periodDuration: this.studyPeriodDuration
        }
        this.handleToggle=this.handleToggle.bind(this)
    }

    handleToggle() {
        console.log('handleToggle')
        if(this.state.period === 'Study'){
            this.setState({period:'Rest', periodDuration:this.breakPeriodDuration}) 
        }else{
            this.setState({period:'Study', periodDuration:this.studyPeriodDuration})
        }
    }

    render(){
        console.log("render PomodoroTimer")
        return(
            <Timer toggle={this.handleToggle} periodDuration={this.state.periodDuration} period={this.state.period}/>
        )
    }

}

export default PomodoroTimer