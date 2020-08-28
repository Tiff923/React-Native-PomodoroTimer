import React from 'react';
import TimerButton from './TimerButtons'
import TimerDisplay from './TimerDisplay'
import TimerHeader from './TimerHeader'
import TimerInput from './TimerInput'


class Timer extends React.Component{
    constructor(props){ 
        console.log("constructor Timer")
        super(props)
        this.state={
            running: false,
            timeSec: this.props.periodDuration*60
        }
    
        this.handlePlay=this.handlePlay.bind(this)
        this.handlePause=this.handlePause.bind(this)
        this.handleRestart=this.handleRestart.bind(this)
        
    }

    handlePlay(){
        console.log("handlePlay")
        this.setState({running:true})
        function countDown(){this.setState({timeSec: this.state.timeSec - 1})}
        this.timer= setInterval(countDown.bind(this), 1000)
    }

    handlePause(){
        console.log("handlePause")
        this.setState({running:false})
        clearInterval(this.timer)
    }

    handleRestart(){
        console.log("handleRestart")
        clearInterval(this.timer)
        this.setState({running:false, timeSec: this.props.periodDuration * 60})
    }


    componentWillReceiveProps(props){
        console.log("componentWillReceiveProps")
        this.setState({running: false, timeSec: props.periodDuration*60})
    }


    componentDidUpdate(){
        console.log("componentDidUpdate")
        if(this.state.running === true && this.state.timeSec === 0){
            clearInterval(this.timer)
            this.props.toggle()
        }
    }

    render(){
        console.log("render Timer")
        return(
            <>
                <TimerHeader period={this.props.period} running={this.state.running}/>
                <TimerDisplay timeSec={this.state.timeSec} />
                <TimerButton 
                    running={this.state.running}
                    clickPlay={this.handlePlay} 
                    clickPause={this.handlePause}
                    clickRestart={this.handleRestart}
                />
                <TimerInput />
            </>
        )
    }

}

export default Timer 