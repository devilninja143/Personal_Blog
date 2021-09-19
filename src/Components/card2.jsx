import React, { Component } from 'react';


class Card2 extends Component {
    state = {  }
    style={
        height: "500px",
        minWidth: "500px",
    }
    cardStyle={
        overflow: "hidden"
    }
    componentDidMount(){
        
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="card bg-dark text-white m-auto" style={this.cardStyle}>
                    <img src={this.props.hostName+this.props.items.img} style={this.style} className="card-img" alt="..." />
                    <div className="card-img-overlay">
                        <h2 className="card-title">{this.props.items.title}</h2>
                        <p className="card-text">{this.props.items.desc}</p>
                        <p className="card-text">{this.props.items.data}</p>
                        <p className="card-text">{this.props.items.view_count}</p>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Card2;