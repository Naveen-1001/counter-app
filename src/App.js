import logo from './logo.svg';
import './App.css';
import Counters from './components/counters';
import NavBar from './components/NavBar';
import React, { Component } from 'react';
import Counter from './components/counter';
import { Button } from 'bootstrap';
class App extends Component{

  state = { 
    counters: [
        {id: 1,value:1},
        {id: 2,value:2},
        {id: 3,value:3},
        {id: 4,value:4}
    ]
 }

  handleDelete=(counterId)=> {
      console.log('Event handler called',counterId);
      const newCounters=this.state.counters.filter(c=>c.id !==counterId);
      this.setState({counters: newCounters});
  }

  handleIncrement=(countersProp)=> {
      const countersClone=[...this.state.counters];
      const index=countersClone.indexOf(countersProp);
      countersClone[index]={ ...countersProp };
      countersClone[index].value++;
      this.setState({counters: countersClone});
  }

  handleDecrement=(countersProp)=> {
      const countersClone=[...this.state.counters];
      const index=countersClone.indexOf(countersProp);
      countersClone[index]={ ...countersProp };
      if(countersClone[index].value>0)
      {
          countersClone[index].value--;
      }
      this.setState({counters: countersClone});
  }

  render(){
    return (
      <React.StrictMode>
        <NavBar
        totalCounters={this.state.counters.length} 
        />
        <main className='container'>
          <Counters 
          onDelete={this.handleDelete} 
          onIncrement={this.handleIncrement} 
          onDecrement={this.handleDecrement} 
          counters={this.state.counters}
          />
        </main>
      </React.StrictMode>
    );
  }
}

export default App;
