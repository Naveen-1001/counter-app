import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {
  
    render() { 
        return (<div>
            {this.props.counters.map(counter=>( 
            <Counter 
            key={counter.id}
            value={counter.value} 
            onDelete={this.props.onDelete} 
            onIncrement={this.props.onIncrement} 
            onDecrement={this.props.onDecrement} 
            id={counter.id} 
            countersProp={counter}
            />
            ))}
        </div>);
    }
}
 
export default Counters;