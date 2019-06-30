import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { getSmurfList, addSmurf } from '../actions/index'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  constructor() {
    super();
    this.state = {
        newSmurfName: "",
        newSmurfAge: "",
        newSmurfHeight: ""
    };

    this.textChangeHandler = this.textChangeHandler.bind(this);
  };

  textChangeHandler (event, target) {
      this.setState({[target]: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <h1 onClick={() => this.props.getSmurfList()}>SMURFS! 2.0 W/ Redux(Click me!!!)</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <form onSubmit={(event) => {
          event.preventDefault();
          this.props.addSmurf(this.state.newSmurfName, this.state.newSmurfAge, this.state.newSmurfHeight)
        }}>
          Add a new smurf:
          <input type="text" placeholder="name" onChange={(e) => this.textChangeHandler(e,"newSmurfName")} value={this.state.newSmurfName} />
          <input type="text" placeholder="age" onChange={(e) => this.textChangeHandler(e,"newSmurfAge")} value={this.state.newSmurfAge} />
          <input type="text" placeholder="height" onChange={(e) => this.textChangeHandler(e,"newSmurfHeight")} value={this.state.newSmurfHeight} />
          <button type="submit">Add Smurf!</button>
        </form>
        {this.props.message}
        {this.props.smurfs.map((s, id) =>  {
        return (
          <p key={id}>
            {s.name}
            <br></br>
            {s.height}
            <br></br>
            {s.age}
          </p>
        )})}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      smurfs: state.smurfs,
      message: `${state.message}`
  };
};

export default connect(mapStateToProps, { getSmurfList, addSmurf })(App);