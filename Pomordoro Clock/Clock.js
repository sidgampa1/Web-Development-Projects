class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: "00",
      minutes: "25",
      break: 5,
      session: 25,
      clockActive: false,
      isSession: true,
      clockID: ""
    }
    this.incBreak=this.incBreak.bind(this);
    this.decBreak=this.decBreak.bind(this);
    this.incSess=this.incSess.bind(this);
    this.decSess=this.decSess.bind(this);

    this.reset=this.reset.bind(this);
    this.play=this.play.bind(this);
  //  this.start=this.start.bind(this);
  }

  render() {
    return (
      <div>
      <div id="title"> Pomodoro Clock </div>
      <Params break={this.state.break} incBreak={this.incBreak} decBreak={this.decBreak}
            session={this.state.session} incSess={this.incSess} decSess={this.decSess}/>
      <Display minutes={this.state.minutes} seconds={this.state.seconds}
            reset={this.reset}
            play={this.play}/>
         </div>

    )
  }

  incBreak() {
    //quit if clock is active
    if (this.state.clockActive) {
      return
    }
    //ncrease break by 1
    this.setState ({
      break: this.state.break + 1
    })

  }

  decBreak() {
    //quit if break is already at the lowest (1 min)
    //quit if clock is active
    if ((this.state.break===1)||(this.state.clockActive)) {
      return
    }

    //decrease break by 1
    this.setState( {
      break: this.state.break - 1
    })
  }

  incSess() {
    //quit if clock is active
    if (this.state.clockActive) {
      return
    }
    //ncrease session by 1
    this.setState ({
      session: this.state.session + 1
    })
  }

  decSess() {
    //quit if session is already at the lowest (1 min)
    //quit if clock is active
    if ((this.state.session===1)||(this.state.clockActive)) {
      return
    }
  //decrease session by 1
    this.setState( {
      session: this.state.session - 1
    })
  }

  reset() {
    this.setState({
      seconds: "00",
      minutes: "25",
      break: 5,
      session: 25,
      clockActive: false
    })
  }

  play() {
    // start clock
    var id=setInterval(tick, 1000)
    // store id for later pausing
    this.setState({
      clockID: id,
      clockActive: true
    })
  }

  tick() {
   //TODO update time
    if ((this.state.seconds == 0)&&(this.state.minutes == 0)) {
      // reset clock and start next round
      startNextRound()
    }
    else if (this.state.seconds == 0) {
      // decrement minute by 1
      decrementMinute()
    }
    else {
      // decrement seconds by 1
      decrementSecond()
    }
  }

  startNextRound() {
    if (this.state.isSession) {
      startBreak()
    }
    else {
      startSession()
    }
  }

  startBreak() {
    this.setState({
      minutes: formatNum(this.state.break),
      seconds: formatNum(0),
      isSession: false
    })
  }

  startSession() {
    this.setState({
      minutes: formatNum(this.state.session),
      seconds: formatNum(0),
      isSession: true
    })
  }

  decrementMinute() {
    this.setState({
      minutes:formatNum(this.state.minutes-1),
      seconds:formatNum(0)
    })

  }

  decrementSecond() {
    this.setState({
      seconds:getNextSecond()
    })
  }

  getNextSecond() {
    return this.state.seconds == 0 ? 59 : formatNum(this.state.seconds - 1)
  }

  formatNum(num) {
    if (num < 10) {
      num="0"+num;
    }
    return num

    }
}

class Params extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="params">
        <div id="break"> Break Length
          <div className="input">
            <button className="fa fa-arrow-up" onClick={this.props.incBreak}></button> {this.props.break}
            <button className="fa fa-arrow-down" onClick={this.props.decBreak}></button>
          </div>
        </div>
        <div id="session"> Session Length
          <div className="input">
            <button className="fa fa-arrow-up" onClick={this.props.incSess}></button>  {this.props.session}
            <button className="fa fa-arrow-down" onClick={this.props.decSess}></button>
          </div>
        </div>
      </div>
    )
  }
}

class Display extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
      <div id="clock"> Session
        <div id="time"> {this.props.minutes}:{this.props.seconds} </div>
        </div>
      <div className="controls">
        <button className="fa fa-play" onClick={this.props.play}></button>
        <button className="fa fa-pause"></button>
        <button className="fa fa-refresh" onClick={this.props.reset}></button>
        </div>
        </div>

    )
  }
}

ReactDOM.render(<Clock />, document.getElementById("base"));
