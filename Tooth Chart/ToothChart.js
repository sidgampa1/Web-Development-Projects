var values={}

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: values
    }
  }

  render() {
    return (
    <div> TOOTH CHART
        <form action="">
          <input type="text"/>
          <input type="text"/>
          <input type="text"/>
          <input type="text"/>
          <input type="text"/>
          <input type="text"/>
          <input type="text"/>
          <input type="text"/>
          <input type="text"/>
          <input type="text"/>
          <input type="text"/>
          <input type="text"/>
          <input type="text"/>
          <input type="text"/>
          <input type="text"/>
          <input type="text"/>
          <div> Progn </div>

        </form>
        </div>
    )
  }
}

ReactDOM.render(<Grid />, document.getElementById("base"));
