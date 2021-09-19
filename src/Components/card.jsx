import React, { Component } from 'react';
import {Link} from "react-router-dom"

class Card extends Component {
    state = { 
        new_date: ""
     }
     style = {
         height: "300px",
         overflow: "hidden"
     }
     componentDidMount(){
        let date = new Date(this.props.articleList.date);
        date = date.toUTCString()
         this.setState({
             new_date: date
        })
     }
    handelLocation = ()=>{
        if(window.location.pathname = `article_view/:id/`) window.location.pathname = "article_view/"+this.props.articleList.id;
    }
    render() { 
        return ( 
            <React.Fragment>
                <Link to={"article_view/"+this.props.articleList.id} className="col-12 col-md-6 col-lg-4 text-decoration-none text-dark " onClick={this.handelLocation}>
                        <div className="card mb-3">
                            <div className="card-img-top d-flex" style={{maxHeight: "200px", overflow: 'hidden'}}>
                                <img src={this.props.hostName+this.props.articleList.img} className="" alt="..." style={{margin: "auto"}} />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{this.props.articleList.title}</h5>
                                <div className="fs-6 catagories text-secondary">{this.props.articleList.catagory_name}</div>
                                <p className="card-text text-secondary" >{this.props.articleList.view_count != undefined?"View Count = "+this.props.articleList.view_count:""}</p>
                                <p className="card-text" style={{height: "30px", overflow: "hidden"}}><div dangerouslySetInnerHTML={{__html: this.props.articleList.desc}} /></p>
                                <p className="card-text"><small className="text-muted">{this.state.new_date}</small></p>
                            </div>
                        </div>
                    </Link>
            </React.Fragment>
         );
    }
}
 
export default Card;