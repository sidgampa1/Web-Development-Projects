class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: {},
      printGrid: false
    }
    this.onChange=this.onChange.bind(this)
    // this.onSubmit=this.onSubmit.bind(this)
  }

  onChange(e) {
    var newGrid={...this.state.grid, [e.target.id]: e.target.value}

    this.setState({
      grid: newGrid
    })

    // alert(JSON.stringify(this.state.grid))
  }

  onSubmit(e) {
    this.setState({
      printGrid:true
    })
  }


  render() {
    return (
    <div>
        <form action="">
        <div className="grid">
          <GridRow name="1" onChange={this.onChange}/>
          <GridRow name="2" onChange={this.onChange}/>
          <GridRow name="3" onChange={this.onChange}/>
          <GridRow name="4" onChange={this.onChange}/>
          <GridRow name="6" onChange={this.onChange}/>
          <GridRow name="5" onChange={this.onChange}/>
          <GridRow name="7" onChange={this.onChange}/>
          <GridRow name="9" onChange={this.onChange}/>
          <GridRow name="8" onChange={this.onChange}/>
          <GridRow name="10" onChange={this.onChange}/>
          <GridRow name="11" onChange={this.onChange}/>
          <GridRow name="12" onChange={this.onChange}/>
          <GridRow name="13" onChange={this.onChange}/>
          <GridRow name="14" onChange={this.onChange}/>
          <GridRow name="15" onChange={this.onChange}/>
          <GridRow name="16" onChange={this.onChange}/>
          <Labels/>
          </div>

          <div className="grid">
            <GridRow name="32" onChange={this.onChange}/>
            <GridRow name="31" onChange={this.onChange}/>
            <GridRow name="30" onChange={this.onChange}/>
            <GridRow name="29" onChange={this.onChange}/>
            <GridRow name="28" onChange={this.onChange}/>
            <GridRow name="27" onChange={this.onChange}/>
            <GridRow name="26" onChange={this.onChange}/>
            <GridRow name="25" onChange={this.onChange}/>
            <GridRow name="24" onChange={this.onChange}/>
            <GridRow name="23" onChange={this.onChange}/>
            <GridRow name="22" onChange={this.onChange}/>
            <GridRow name="21" onChange={this.onChange}/>
            <GridRow name="20" onChange={this.onChange}/>
            <GridRow name="19" onChange={this.onChange}/>
            <GridRow name="18" onChange={this.onChange}/>
            <GridRow name="17" onChange={this.onChange}/>
            <Labels/>


            </div>
          <input id="submit" type="submit" onClick={this.onSubmit}/>
          </form>
          <p>{JSON.stringify(this.state.grid)}</p>

        </div>
    )
  }
}

class GridRow extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
      <input type="number" max="999" id={this.props.name+"~"+1} maxLength="3" onChange={this.props.onChange}/>
      <input type="number" max="999" id={this.props.name+"~"+2} maxLength="3" onChange={this.props.onChange}/>
      <input type="number" max="999" id={this.props.name+"~"+3} maxLength="3" onChange={this.props.onChange}/>
      <input type="number" max="999" id={this.props.name+"~"+4} maxLength="3" onChange={this.props.onChange}/>
      <input type="number" max="999" id={this.props.name+"~"+5} maxLength="3" onChange={this.props.onChange}/>
      <input type="number" max="999" id={this.props.name+"~"+6} maxLength="3" onChange={this.props.onChange}/>
      <input type="number" max="999" id={this.props.name+"~"+7} maxLength="3" onChange={this.props.onChange}/>
      <input type="number" max="999" id={this.props.name+"~"+8} maxLength="3" onChange={this.props.onChange}/>
      <div className="name">{this.props.name}</div>
      <input type="number" max="999" id={this.props.name+"~"+9} maxLength="3" onChange={this.props.onChange}/>
      <input type="number" max="999" id={this.props.name+"~"+10} maxLength="3" onChange={this.props.onChange}/>
      <input type="number" max="999" id={this.props.name+"~"+11} maxLength="3" onChange={this.props.onChange}/>
      <input type="number" max="999" id={this.props.name+"~"+12} maxLength="3" onChange={this.props.onChange}/>
      <input type="number" max="999" id={this.props.name+"~"+13} maxLength="3" onChange={this.props.onChange}/>
      <input type="number" max="999" id={this.props.name+"~"+14} maxLength="3" onChange={this.props.onChange}/>
      <input type="number" max="999" id={this.props.name+"~"+15} maxLength="3" onChange={this.props.onChange}/>
      </div>
    )
  }
}

class Labels extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (<div className="labels">
    <div >Progn</div>
    <div >Diagnosis</div>
    <div>Furcation</div>
    <div>Bleed</div>
    <div>GM/Rec</div>
    <div>Cal</div>
    <div>PD</div>
    <div>Plaque</div>
    <div >------------</div>
    <div>Plaque</div>
    <div>PD</div>
    <div>Cal</div>
    <div>GM/Rec</div>
    <div>Bleed</div>
    <div>Furcation</div>
    <div>Mobil</div>

    </div>
  )
  }
}

ReactDOM.render(<Grid />, document.getElementById("base"));
