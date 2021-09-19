import axios from 'axios';
import React, { Component } from 'react';
import Card from './card';
import PaginationNav from './pagination';


class SearchView extends Component {
    state = { 
        item1: [],
        item2: [],
        page: 1,
        page2: 1,
        page_num: 0,
        page_num2: 0
     }

    getValue = (page)=>{
        this.setState({
            page: page,
        })
        console.log(page);
        axios.defaults.baseURL = `/api/`;
        axios.get(`search_article?searchData=${this.props.articleList}&page=${page}`)
        .then(res=>{
            this.setState({
                item1: res.data.article,
                page_num: res.data.page_number
            })
        })
    }
    getValue2 = (page)=>{
        this.setState({
            page2: page,
        })
        console.log(page);
        axios.defaults.baseURL = `http://127.0.0.1:8000/api/`;
        axios.get(`search_article?searchData=${this.props.articleList}&page2=${page}`)
        .then(res=>{
            this.setState({
                item2: res.data.news,
                page_num2: res.data.page_number2
            })
        })
    }

     componentDidMount(){
         axios.defaults.baseURL = `http://127.0.0.1:8000/api/`;
         axios.get(`search_article?searchData=${this.props.articleList}&page=1`)
         .then(res=>{
             this.setState({
                item1: res.data.article,
                item2: res.data.news,
                page_num: res.data.page_number
            })
         })
     }
     componentWillUpdate(newProps, newState){

     }
     notFoundMsg = ()=>{
         if(this.state.item1.length && this.state.item2.length === 0){
                return  (<div className="container-fluid d-grid justify-content-center" style={{height: "80vh", textAlign: "center"}}>
                            <div className="fs-1" style={{margin: "auto"}}>Nothing Found 404!!!</div>
                        </div>)
         }else{
            return ""
         }
     }
    render() { 
        return ( 
            <div className="container">
                <h1 className="mx-2 my-4">Search Result</h1>
                <h3>Article Result</h3>
                <div className="row" style={{}}>
                    
                    {
                        this.state.item1.length === 0? this.notFoundMsg(): this.state.item1.map(item=>{return <Card articleList={item} hostName={this.props.hostName} />})
                    }
                </div>
                <PaginationNav page={this.getValue} page_num={this.state.page_num}/>
                <h3>News Result</h3>
                <div className="row" style={{}}>
                    
                    {
                        this.state.item2.length === 0? this.notFoundMsg(): this.state.item2.map(item=>{return <Card articleList={item} hostName={this.props.hostName} />})
                    }
                </div>
                <PaginationNav page={this.getValue2} page_num={this.state.page_num2}/>
            </div>
         );
    }
}

export default SearchView;