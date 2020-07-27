var operators = ["+", "-", "/", "*"];
var maxLength=15;

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formula: "0",
      result: "0",
      lastVal: "",
      currNum: "",
      replaceNum: false
    };
    this.handleDeci= this.handleDeci.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
    this.handleOper = this.handleOper.bind(this);
    this.handleNum = this.handleNum.bind(this);
  }

  handleDeci(e) {
    //display leading 0 if decimal is first entry
    var last = ""
    !isNaN(+this.state.lastVal) ? last=e.target.value : last="0"+e.target.value
//only include decimal if current number doesn't already have one
 this.state.currNum.includes(".")?last="":last=last
    console.log("DECI "+ this.state.currNum)
    console.log( this.state.currNum.includes("."))
 //set state
 this.setState({lastVal: last,
           formula: this.state.formula+last,
               currNum: this.state.currNum+last})
    }

  handleClear() {
      this.setState({
        formula: "0",
        result: "",
        lastVal: "",
        currNum: ""
      })
    }

  handleEquals() {
        var result=eval(this.state.formula)
        this.setState({
          lastVal: result,
          currNum: result,
          replaceNum: true
        })
      }

  handleOper(e) {
      //  alert(e.target.value)
         //remove previous entry if it is also an operator
     var form=this.state.formula
     var hasOper=operators.includes(this.state.lastVal)
     //console.log(hasOper)
     hasOper? form=form.slice(0,form.length-1) : form=form
     //console.log(form)
       this.setState({
            formula: form+e.target.value,
            lastVal: e.target.value,
            currNum:"",
            replaceNum: false
         }

             )}

  handleNum(e) {
               var form=this.state.formula
               var newNum=this.state.currNum
               var newVal=e.target.value
               var error=e.target.value
               if (form==0) {
                 form="" //replace 0 with current entry
               }
               if (this.state.replaceNum) {
                 form="" //making new formula after hitting equals
                 newNum=""
               }
               if (form.length==maxLength) {
                 newVal=""
                 error="Formula is too long (hit = or AC)"
               }
               this.setState({
                 formula: form + newVal,
                 lastVal:error,
                 currNum: newNum+newVal,
                 replaceNum: false
               })
               checkLength()
             }

  render() {
                 return (
                   <div>
                   <EntryScreen formula={this.state.formula} />
                   <FormulaScreen lastVal={this.state.lastVal} />
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
                       <div id='entry' className='row'>{this.props.formula}</div>
                 )
               }
             }

class FormulaScreen extends React.Component {
               constructor(props) {
                 super(props);
               }

               render() {
                 return (
                   <div id='formula' className='row'>{this.props.lastVal}</div>
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
                     <button onClick={this.props.oper} value='/' id="divide" className="oper">
                       /
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
