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
    this.pause=this.pause.bind(this);
    this.tick=this.tick.bind(this);

  }

  render() {
    return (
      <div>
      <div id="title"> Pomodoro Clock </div>
      <Params break={this.state.break} incBreak={this.incBreak} decBreak={this.decBreak}
            session={this.state.session} incSess={this.incSess} decSess={this.decSess}/>
      <Display minutes={this.state.minutes} seconds={this.state.seconds}
            reset={this.reset}
            play={this.play}
            pause={this.pause}/>
         </div>

    )
  }

  incBreak() {
    //quit if clock is active
    if (this.state.clockActive) {
      return
    }
    var brk=this.state.break+1
    //TODO only change clock if current clock is on break
    // var min=this.formatNum(brk)
    // var sec=this.formatNum(0)

    //increase break by 1
    this.setState({
      break: brk,
      // minutes: min,
      // seconds: sec,
    })
  }

  decBreak() {
    //quit if break is already at the lowest (1 min)
    //quit if clock is active
    if ((this.state.break===1)||(this.state.clockActive)) {
      return
    }

    var brk=this.state.break-1
    // var min=this.formatNum(brk)
    // var sec=this.formatNum(0)
    //decrease break by 1
    this.setState( {
      break: brk,
      // minutes: min,
      // seconds: sec,
    })
  }

  incSess() {
    //quit if clock is active
    if (this.state.clockActive) {
      return
    }
    var sess=this.state.session + 1
    var min=this.formatNum(sess)
    var sec=this.formatNum(0)
    //ncrease session by 1
    this.setState ({
      session: sess,
      minutes: min,
      seconds: sec
    })
  }

  decSess() {
    //quit if session is already at the lowest (1 min)
    //quit if clock is active
    if ((this.state.session===1)||(this.state.clockActive)) {
      return
    }
    var sess=this.state.session - 1
    var min=this.formatNum(sess)
    var sec=this.formatNum(0)
  //decrease session by 1
    this.setState( {
      session: sess,
      minutes: min,
      seconds: sec
    })
  }

  reset() {
    // don't do anything if clock is ticking
    if (this.state.clockActive) {
      return
    }

    this.setState({
      seconds: "00",
      minutes: "25",
      break: 5,
      session: 25,
      clockActive: false
    })
  }

  play() {
  //  alert("is this working?")
    // don't do anything if clock is already ticking
    if (this.state.clockActive) {
    //  alert("clock is active")
      return
    }
    // start clock
  //  alert("about to set interval")
    var id=setInterval(this.tick, 1000)
    // clearInterval(id)
    // store id for later pausing
    this.setState({
      clockID: id,
      clockActive: true
    })
  }

  pause() {
    if (!this.state.clockActive) {
      return
    }

    //stop the clock
    clearInterval(this.state.clockID)

    this.setState({
      clockID: "",
      clockActive: false
    }
    )
  }

// test() {
//   alert("Hello test is working.")
//   this.test2()
// }
//
// test2() {
//   alert("test2 is working")
// }


  tick() {
  //  alert(this.state.seconds)
   //TODO update time
    if ((this.state.seconds == 0)&&(this.state.minutes == 0)) {
      // reset clock and start next round
      this.startNextRound()
    }
    else if (this.state.seconds == 0) {
      // alert("Decrementing minute")
      // decrement minute by 1
      this.decrementMinute()
    }
    else {
      // decrement seconds by 1
      this.decrementSecond()
    }
  }

  startNextRound() {
    if (this.state.isSession) {
      this.startBreak()
    }
    else {
      this.startSession()
    }
  }

  startBreak() {
    var min = this.formatNum(this.state.break)
    var sec = this.formatNum(0)
    this.setState({
      minutes: min,
      seconds: sec,
      isSession: false
    })
  }

  startSession() {
    var min = this.formatNum(this.state.session)
    var sec = this.formatNum(0)
    this.setState({
      minutes: min,
      seconds: sec,
      isSession: true
    })
  }

  decrementMinute() {
    var min = this.formatNum(this.state.minutes-1)
    var sec = this.formatNum(59)
    this.setState({
      minutes: min,
      seconds: sec
    })

  }

  decrementSecond() {
    var sec = this.getNextSecond()
    this.setState({
      seconds: sec
    })
  }

  getNextSecond() {
    return this.state.seconds == 0 ? 59 : this.formatNum(this.state.seconds - 1)
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
        <button className="fa fa-pause" onClick={this.props.pause}></button>
        <button className="fa fa-refresh" onClick={this.props.reset}></button>
        </div>
        </div>

    )
  }
}

ReactDOM.render(<Clock />, document.getElementById("base"));
