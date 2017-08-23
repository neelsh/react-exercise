import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { firstValue: '', secondValue: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.calculateAdd = this.calculateAdd.bind(this);
    this.calculateMinus = this.calculateMinus.bind(this);
    this.calculateMultiply = this.calculateMultiply.bind(this);
    this.calculateDivide = this.calculateDivide.bind(this);
    this.displayClear = this.displayClear.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

   calculateAdd() {
    const answer =  parseInt(this.state.firstValue) + parseInt(this.state.secondValue);
    this.setState({answer: answer})
  }

  calculateMinus() {
    const answer =  parseInt(this.state.firstValue) - parseInt(this.state.secondValue);
    this.setState({answer: answer})
  }

  calculateMultiply() {
    const answer =  parseInt(this.state.firstValue) * parseInt(this.state.secondValue);
    this.setState({answer: answer})
  }

  calculateDivide() {
    const answer =  parseInt(this.state.firstValue) / parseInt(this.state.secondValue);
    this.setState({answer: answer})
  }

  displayClear() {
    this.setState({
      firstValue: "0",
      secondValue: "0",
      answer: "0",
    });
  }

  updateValueOne(e) {
    this.setState({firstValue: e.target.value});
  }

  updateValueTwo(e) {
    this.setState({secondValue: e.target.value});
  }

  render() {

    return (
      <div>
      <form>
      <label>
        First value:
        <input id="myInput" name="firstValue" type="text" value={this.state.firstValue} onChange={this.updateValueOne.bind(this)}/>
      </label>
      </form>
        <form>
      <label>
        Second value:
        <input id="myInput" name="secondValue" type="text" value={this.state.secondValue} onChange={this.updateValueTwo.bind(this)} />
      </label>
      </form>
        <br/>
        <button onClick={this.calculateAdd}>+</button>
        <button onClick={this.calculateMinus}>-</button>
        <button onClick={this.calculateMultiply}>*</button>
        <button onClick={this.calculateDivide}>/</button>
        <hr/>
        <button onClick={this.displayClear}>Clear</button>
        <hr/>
        <h3>Result: {this.state.answer}</h3>
      </div>
    )
  }
}

const app = document.getElementById('app')
ReactDOM.render(<App />, app)
