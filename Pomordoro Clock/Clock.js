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
    // this.incrememt=this.increment.bind(this);
    // this.decrement=this.decrement.bind(this);

  }

  render() {
    return (
      <div>
      <div id="title"> Pomodoro Clock </div>
      <Params break={this.state.break} session={this.state.session}/>
      <Display minutes={this.state.minutes} seconds={this.state.seconds}/>
         </div>

    )
  }
  
  increment()
  {
    //TODO increment parameters (break and session)
  }

  decrement()
  {
    //TODO decrement parameters (break and session)
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
            <button className="fa fa-arrow-up"></button> {this.props.break}
            <button className="fa fa-arrow-down"></button>
          </div>
        </div>
        <div id="session"> Session Length
          <div className="input">
            <button className="fa fa-arrow-up"></button>  {this.props.session}
            <button className="fa fa-arrow-down"></button>
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
        <button className="fa fa-refresh"></button>
        </div>
        </div>

    )
  }
}

ReactDOM.render(<Clock />, document.getElementById("base"));
