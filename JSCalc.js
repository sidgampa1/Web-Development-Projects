class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formula: "",
      result: "",
      lastVal: "",
      currOper: ""
    };
    this.handleDeci= this.handleDeci.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
    this.handleOper = this.handleOper.bind(this);
    this.handleNum = this.handleNum.bind(this);
  }

  handleDeci(e) {
    var last = ""
    !isNaN(+this.state.lastVal) ? last=this.state.lastVal+e.target.value : last="0"+e.target.value

 this.setState({lastVal: last})
    }

  handleClear() {
    this.setState({
      formula: "",
      result: "",
      lastVal: "",
    })
  }
  handleEquals() {
    this.setState({
      result: eval(this.state.formula)
    })
  }

  handleOper(e) {
    console.log("OPER")
    oper=['+','-','x'];
    this.setState({
      formula: this.state.formula + this.state.lastVal + e.target.value,
      lastVal: ""
    })
   // if (oper.includes(this.state.lastVal)) {
   //   this.setState({
   //     lastVal: e.target.value
   //   })
   // }
   //  else {
   //    this.setState({
   //      formula: this.state.formula+e.target.value,
   //      lastVal: e.target.value,
   //
   //    }
   //
   //           )}
}
   evalFormula(){
  }

  evalFormula() {
    this.setState({/*TODO*/})
  }
handleNum(e) {
  console.log("NUM")
  this.setState({
    lastVal: this.state.lastVal + e.target.value,
  })
}
  render() {
    return (
      <div>
        <FormulaScreen formula={this.state.formula} />
        <EntryScreen lastVal={this.state.lastVal} />
      <Buttons
        equals={this.handleEquals}
        oper={this.handleOper}
        num={this.handleNum}
        deci={this.handleDeci}
        clear={this.handleClear}
      />
        </div>
    );
  }
}

class EntryScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
          <div id='entry' className='row'>{this.props.lastVal}</div>
    )
  }
}

class FormulaScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='formula' className='row'>{this.props.formula}</div>
    )
  }
}

class Buttons extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button onClick={this.props.clear} id="AC" className="wide">AC</button>
        <button onClick={this.props.oper} value='*' id="multiply" className="oper">
          x
        </button>
        <button onClick={this.props.oper} value='\' id="divide" className="oper">
          \
        </button>
        <button onClick={this.props.num} value='1' id="one" className="num">1</button>
        <button onClick={this.props.num} value='2'id="two" className="num">2</button>
        <button onClick={this.props.num} value='3' id="three" className="num">
          3
        </button>
        <button onClick={this.props.oper} value='+' id="add" className="oper">
          +
        </button>
        <button onClick={this.props.num} value='4' id="four" className="num">
          4
        </button>
        <button onClick={this.props.num} value='5' id="five" className="num">
          5
        </button>
        <button onClick={this.props.num} value='6' id="six" className="num">
          6
        </button>
        <button onClick={this.props.oper} value='-' id="subtract" className="oper">
          -
        </button>
        <button onClick={this.props.num} value='7' id="seven" className="num">
          7
        </button>
        <button onClick={this.props.num} value='8' id="eight" className="num">
          8
        </button>
        <button onClick={this.props.num} value='9' id="nine" className="num">
          9
        </button>
 <button onClick={this.props.equals} className="tall" value='=' id="equals">=</button>
        <button onClick={this.props.num} value='0' id="zero" className="wide num">
          0
        </button>
        <button onClick={this.props.deci} value='.' className="num" id="decimal">
          .
        </button>

      </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById("base"));
