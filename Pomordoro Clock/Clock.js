class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      minutes: 0,
      clockActive: false,
    }
  }

  render() {
    return (
      <div> <div id="title"> Pomodoro Clock </div>
      <div id="params">
        <div id="break"> Break Length
          <div className="input">
            <button className="fa fa-arrow-up"></button> 5
            <button className="fa fa-arrow-down"></button>
          </div>
        </div>
        <div id="session"> Session Length
          <div className="input">
            <button className="fa fa-arrow-up"></button> 25
            <button className="fa fa-arrow-down"></button>
          </div>
        </div>
      </div>
      <div id="clock"> Session
        <div id="time"> 25:00 </div>
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
