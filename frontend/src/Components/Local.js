import React, { Component } from 'react';

class Local extends Component{
    render(){
        return(
            <div id="card" className="card bg-light mb-3">
            <div className="card-header text-danger">{this.props.text}</div>
            <div className="card-body">
              <p className="card-text">
                  {this.props.name}
              </p>
            </div>
          </div>
        )
    }
}

export default Local

