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
          <div class="input">
            <button class="fa fa-arrow-up"></button> 5
            <button class="fa fa-arrow-down"></button>
          </div>
        </div>
        <div id="session"> Session Length
          <div class="input">
            <button class="fa fa-arrow-up"></button> 25
            <button class="fa fa-arrow-down"></button>
          </div>
        </div>
      </div>
      <div id="clock"> Session
        <div id="time"> 25:00 </div>
        </div>
      <div class="controls">
        <button class="fa fa-play"></button>
        <button class="fa fa-pause"></button>
        <button class="fa fa-refresh"></button>
        </div>
         </div>

    )
  }
}

ReactDOM.render(<Clock />, document.getElementById("base"));
