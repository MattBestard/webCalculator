import React from 'react';
import Axios from 'axios';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.state = {
      integer1: 0,
      integer2: 0,
      result: 0
    };
  }

  handleClear(event) {
    this.setState({integer1: 0, integer2: 0, result: 0});
  }
  
  handleChange(event) {
    const valToChange = parseInt(event.target.value);
    if(!isNaN(valToChange)) {
      this.setState({[event.target.name]: valToChange});
    } else {
      this.setState({[event.target.name]: 0});
    }
  }

  handleClick(event) {
    event.preventDefault();
    switch (event.target.id) {
      case "ADD":
        this.setState({result: this.state.integer1 + this.state.integer2})
        break;
      case "SUB":
        this.setState({result: this.state.integer1 - this.state.integer2})
        break;
      case "MULT":
        this.setState({result: this.state.integer1 * this.state.integer2})
        break;
      case "DIV":
        this.setState({result: this.state.integer1 / this.state.integer2})
        break;
      default:
        console.log("No operation like that is definied");
        break;
    }
  }

  render() {
    return(
      <div>
        <form>
          <div id="inputs">
            <div id="input-1" className="inputLine">
              <label htmlFor="integer1">Enter integer 1</label>
              <input type="text" name="integer1" value={this.state.integer1} onChange={this.handleChange}/>
            </div>
            <div id="input-2" className="inputLine">
              <label htmlFor="integer2">Enter integer 2</label>
              <input type="text" name="integer2" value={this.state.integer2} onChange={this.handleChange}/>
            </div>
          </div>
          <div id="buttons">
            <div className="button" onClick={this.handleClick} id="ADD">+</div>
            <div className="button" onClick={this.handleClick} id="SUB">-</div>
            <div className="button" onClick={this.handleClick} id="MULT">x</div>
            <div className="button" onClick={this.handleClick} id="DIV">/</div>
            <div className="button" onClick={this.handleClear}>Clear</div>
          </div>
          <div id="result-space">
            <p>Result</p>
          </div>
          <div id="answer">
            {this.state.result}
          </div>
        </form>
      </div>
    );
  }
}

export default Calculator;
