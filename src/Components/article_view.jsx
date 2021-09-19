import React, { Component } from 'react';
import Card from './card';
import axios from 'axios';
import { Link } from 'react-router-dom';



class View extends Component {
    state = { 
        items: [],
        items2: []
     }
     apiUrl = ``
     componentDidMount(){
        const porductId = this.props.match.params.id;
        axios.defaults.baseURL = `${this.apiUrl}/api`
        axios({
            method: "GET",
            url: `/article_data/${porductId}/`
         }).then(
             res=>{
                 this.setState({
                     items: res.data.article,
                     items2: res.data.article2
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
                    <div className="fs-6 text-secondary mt-3">Date: {this.state.items.date}</div>
                    <div className="fs-6 text-secondary">{this.state.items.catagory_name}</div>
                    <p className="fs-4">
                        <div dangerouslySetInnerHTML={{__html: this.state.items.desc}} />
                    </p>
                </div>
                <hr />
                <div className="container-sm">
                    <div className="fs-1">
                        Related Article
                    </div>
                    <div className="row">
                        {
                            this.state.items2.map((item, index)=>{                         
                                if(index < 3){
                                    return <Card articleList={item} hostName={this.apiUrl}/>
                                }
                            })
                        }
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default View;