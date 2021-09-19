import React, { Component } from 'react';
import Card from './card';
import axios from 'axios';



class View_News extends Component {
    state = { 
        items: []
     }
    apiUrl = "http://127.0.0.1:8000";
    componentDidMount(){
        const porductId = this.props.match.params.id;
        axios.defaults.baseURL = `${this.apiUrl}/api/`;
        axios({
            method: "GET",
            url: `/news_data/${porductId}/`
         }).then(
             res=>{
                 this.setState({
                     items: res.data
                 })
             }
         )
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="container-sm">
                    <div className="fs-1 fw-lighter">{this.state.items.title}</div>
                    <div className="container-fluid d-flex justify-content-center" style={{margin:"0 auto", border: "1px #000 solid"}}>
                        <img src={this.apiUrl+this.state.items.img} alt="" className="img-fluid" style={{maxHeight: "80vh", width: "100%"}} />
                    </div>
                    <div className="fs-6 text-secondary mt-3">Published: {this.state.items.date}</div>
                    <p className="fs-4">
                        {this.state.items.desc}
                    </p>
                    <div className="fs-6 text-info mt-3">View_count: {this.state.items.view_count}</div>
                </div>
                <hr />
            </React.Fragment>
         );
    }
}
 
export default View_News;