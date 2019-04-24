import React from 'react';

class Calculator extends React.Component {
  render() {
    return(
      <div>
        <form>
          <div id="inputs">
            <div id="input-1" className="inputLine">
              <label htmlFor="integer1">Enter integer 1</label>
              <input type="text" name="integer1" />
            </div>
            <div id="input-2" className="inputLine">
              <label htmlFor="integer2">Enter integer 2</label>
              <input type="text" name="integer2" />
            </div>
          </div>
          <div id="buttons">
            <div className="button">+</div>
            <div className="button">-</div>
            <div className="button">x</div>
            <div className="button">/</div>
            <div className="button">Clear</div>
          </div>
          <div id="result-space">
            <p>Result</p>
          </div>
          <div id="answer">
          </div>
        </form>
      </div>
    );
  }
}

export default Calculator;
