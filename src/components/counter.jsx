import React, { Component } from 'react';

class Counter extends Component {
    /*
    constructor(){
        super();
        this.getIncrement=this.getIncrement.bind(this);
    }
    */

    render() { 

        //console.log('props',this.props)

        return (
        <div>
            <div>Counter #{this.props.id}</div>
            <span className={this.getClassBadge()}>{this.checkCount()}</span>
            <button onClick={()=>this.props.onIncrement(this.props.countersProp)} className="btn btn-secondary btn-sm sm-2 m-1">Inc</button>
            <button onClick={()=>this.props.onDecrement(this.props.countersProp)} className="btn btn-secondary btn-sm sm-2 m-1">Dec</button>
            <button onClick={()=>this.props.onDelete(this.props.id)} className="btn btn-sm btn-danger sm-2 m-2">Delete</button>
        </div> 
        );
    }

    getClassBadge() {
        let classes = "badge m-2 badge-";
        classes += this.props.value > 0 ? "primary" : "warning";
        return classes;
    }

    checkCount(){
        const x=<span>Zero</span>
        return this.props.value<=0 ? x :this.props.value;
    }
}
 
export default Counter;