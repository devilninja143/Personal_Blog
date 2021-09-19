import React, { Component } from 'react';
import Card from './card';
import $ from "jquery";
import axios from 'axios';

class Articles extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoaded : false,
            items : [],
            catagories_list: [],
            catagories: "All", 
            page_no: 1,
            page_number: 0,
        }

    }
    componentDidMount(){
        axios.defaults.baseURL= `${this.props.hostName}/api/`
        axios.get("Blog?page="+this.state.page_no+"&catagories="+this.state.catagories)
        .then(Response => {
            this.setState({
                isLoaded : true,
                items: Response.data.article,
                catagories_list: Response.data.article2,
                page_number: Response.data.page_number
            })
        })
    }
    handlePageChangeUp = (event)=>{
        event.preventDefault();
        let page;
        if(this.state.page_number > this.state.page_no){
            page = this.state.page_no + 1
        }else{
            page = 1
            this.setState({
                page_no: 1,
            })
        }
        axios.get("Blog?page="+page+"&catagories="+this.state.catagories)
        .then(res => {
            this.setState({
                page_no: page,
                items: res.data.article
            })
        })
    }
    handlePageChangeDown = (event)=>{
        event.preventDefault();
        let page;
        if(this.state.page_no > 1){
            page = this.state.page_no - 1
        }else{
            page = this.state.page_number
            this.setState({
                page_no: 1,
            })
        }
        axios.get("Blog?page="+page+"&catagories="+this.state.catagories)
        .then(res => {
            this.setState({
                page_no: page,
                items: res.data.article,
            })
        })
    }
    handleInputChange = (event) => {
        this.setState({ 
            catagories: event.target.value
        })
        axios({
            method: "GET",
            url: `Blog?page=${this.state.page_no}&catagories=${event.target.value}`,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(Response=> {
            this.setState({
                items: Response.data.article,
                page_number: Response.data.page_number
            })
        })
        .catch(error => {
            console.log(error.response)
        });
    }
    render() { 
        if(!this.state.isLoaded){
            return <h1 className="text-center">Loading</h1>
        }else{
            return ( 
                <React.Fragment>
                    <div className="container-sm">
                        <form className="my-3">
                            <div className="input-group">
                                <button class="btn btn-outline-secondary" type="submit">Refresh</button>
                                <select className="form-select" id="inputGroupSelect02" onChange={this.handleInputChange} style={{zIndex: 0}}>
                                    <option value="All">All..</option>
                                    {
                                        this.state.catagories_list.map(item=>{
                                            return <option value={item.id} className="text-capitalize">{item.name}</option>
                                        })
                                    }
                                </select>
                            </div>
                        </form>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 fs-1 my-2">{this.props.prop.title}</div>
                            </div>
                            <div className="row">
                                {
                                    this.state.items.map((item)=>{
                                        return  <Card articleList={item} hostName={this.props.hostName} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="container-sm p-4">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-start">
                                <li className="page-item">
                                <a className="page-link" href="#" tabindex="-1" onClick={this.handlePageChangeDown}>Previous</a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">{this.state.page_no}</a></li>
                                <li className="page-item">
                                <a className="page-link" href="#" onClick={this.handlePageChangeUp}>Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </React.Fragment>
             );
        }
    }
}
 
export default Articles;