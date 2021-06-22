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
  calculate = (num1, num2) => {
      let int1 = Number(num1)
      let int2 = Number(num2)
      let intTot = 0

      switch (this.state.operator){
          case '+':
            intTot = int1 + int2
            break
          case '-':
            intTot = int1 - int2
            break
          case '*':
            intTot = int1 * int2
            break
          case '/':
            intTot = int1 / int2
            break
            default:
            break

      }
        this.setState({
            total: intTot
    })
  }

  setOp = (e) => {
      this.setState({
          operator: e.target.value
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
    <button onClick={ () => this.calculate(this.state.num1, this.state.num2)}>=</button>
    <h3>{this.state.total}</h3>
    <button name="plus" value="+" onClick={ (e) => this.setOp(e)}>+</button>
    <button name="minus" value="-" onClick={ (e) => this.setOp(e)}>-</button>
    <button name="multiply" value="*" onClick={ (e) => this.setOp(e)}>*</button>
    <button name="divide" value="/" onClick={ (e) => this.setOp(e)}>/</button>
  </div>
</div>
    )}
}