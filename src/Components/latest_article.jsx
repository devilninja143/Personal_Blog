import React, { Component } from 'react';
import axios from 'axios';
import Card from './card';

class LatestCont extends Component {
    state = { 
        items: []
    }
    componentDidMount(){
        axios.defaults.baseURL = `${this.props.hostName}/api/`
        axios({
            method: "GET",
            url: "article",
        })
        .then(
            Response=>{
                this.setState({
                    items: Response.data
                })
            }
        )
    }
    render() { 
        return ( 
        <React.Fragment>
            <div className="container-sm latest_article bg-light mt-2">
                <div className="fs-2">Latest Article</div>
                <div className="row">
                    {
                        this.state.items.map((item, index)=>{
                            if(index < 3){
                                return <Card articleList={item} hostName={this.props.hostName}/>
                            }
                        })
                    }
                    <div className="col-12 d-grid justify-content-center my-2">
                        <a href="/Blogs" className="btn btn-outline-primary">View All</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
         );
    }
}
 
export default LatestCont;