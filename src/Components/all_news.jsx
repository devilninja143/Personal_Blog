import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class News extends Component {
    state = { 
        new_date: ""
     }
     componentDidMount(){
        let date = new Date(this.props.articleList.date);
        date = date.toUTCString()
         this.setState({
             new_date: date
         })
     }
    render() { 
        return ( 
            <React.Fragment>
                <hr />
                <div className="fs-1 fw-bolder mt-4 mx-5">{this.props.title}</div>
                <hr />
                <div className="container-sm mt-4">
                    <div className="row">
                        {
                            this.props.articleList.map(item=>{
                                return <Link to={`news_view/${item.id}`} className="col-12 col-md-6 col-lg-4 text-decoration-none text-dark ">
                                            <div className="card mb-3">
                                                <div className="card-img-top d-flex" style={{maxHeight: "200px", overflow: 'hidden'}}>
                                                    <img src={this.props.hostName+item.img} className="" alt="..." style={{margin: "auto"}} />
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">{item.title}</h5>
                                                    <div className="fs-6 catagories text-secondary">{item.view_count}</div>
                                                    <p className="card-text">{item.desc}</p>
                                                    <p className="card-text"><small className="text-muted">{new Date(item.date).toUTCString()}</small></p>
                                                </div>
                                            </div>
                                        </Link>
                            })
                        }

                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default News;