import { Component } from 'react'

export default class Calc extends Component {
  state = {
    operator: "+",
    num1: 0,
    num2: 0,
    total: null
  }

  setNum = (e, num) => {
    this.setState({
      [num]: e.target.value
    })
  }
  sum = (num1, num2) => {
    this.setState({
        total: Number(num1) + Number(num2)
    })
  }
  render() {
    return (
    <div className="container">
  <h1>Add with React!</h1>

  <div className="add">
    <input 
        type="number" 
        name="num1" 
        value={this.state.num1} 
        onChange={ (e) => this.setNum(e, 'num1')}
        />
    <span>{this.state.operator}</span>
    <input 
        type="number" 
        name="num2" 
        value={this.state.num2} 
        onChange={ (e) => this.setNum(e, 'num2')}
        />
    <button onClick={ () => this.sum(this.state.num1, this.state.num2)}>=</button>
    <h3>{this.state.total}</h3>
  </div>
</div>
    )}
}