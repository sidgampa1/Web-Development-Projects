class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: "00",
      minutes: "25",
      break: 5,
      session: 25,
      clockActive: false,
    }
    this.incBreak=this.incBreak.bind(this);
    this.decBreak=this.decBreak.bind(this);
    this.incSess=this.incSess.bind(this);
    this.decSess=this.decSess.bind(this);

    this.reset=this.reset.bind(this);
  //  this.start=this.start.bind(this);
  }

  render() {
    return (
      <div>
      <div id="title"> Pomodoro Clock </div>
      <Params break={this.state.break} incBreak={this.incBreak} decBreak={this.decBreak}
            session={this.state.session} incSess={this.incSess} decSess={this.decSess}/>
      <Display minutes={this.state.minutes} seconds={this.state.seconds}
            reset={this.reset}/>
         </div>

    )
  }

  incBreak()
  {
    //quit if clock is active
    if (this.state.clockActive) {
      return
    }
    //ncrease break by 1
    this.setState ({
      break: this.state.break + 1
    })

  }

  decBreak()
  {
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
      clockActive: false,
    })
  }
  tick()
  {
    //TODO update time - decrease by 1 second
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
        <button className="fa fa-play"></button>
        <button className="fa fa-pause"></button>
        <button className="fa fa-refresh" onClick={this.props.reset}></button>
        </div>
        </div>

    )
  }
}

ReactDOM.render(<Clock />, document.getElementById("base"));
