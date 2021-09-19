import React, { Component } from 'react';
import Navbar from './navbar';
import "./main_style.css"
import LatestCont from './latest_article';
import BigTitle from './bigTitle';
import Footer from './footer';
import Articles from './all_article';
import SlideShow from './slide_show';
import {
        BrowserRouter as Router,
     Switch,
     Route
    } from "react-router-dom"
import SearchView from './searchView';
import axios from 'axios';
import News from './all_news';
import View from './article_view';
import View_News from './news_view';
import PaginationNav from './pagination';


class MainCont extends Component {
    state = { 
        searchData: [],
        news_item: [],
        news_item2: [],
        news_page: [],
        total_news_page: 0,
        articles: [],
        urlId: "",
        page: 1,
        searchPage: 1
     }
    apiUrl = "";
    getSearch = (data)=>{
        this.setState({
            searchData: data,
        })
    }
    getArticleId = (data)=>{
        this.setState({
            urlId: data,
        })
    }
    getPage = (data)=>{
        this.setState({
            searchPage: data
        })
    }
    componentDidMount(){
        axios.defaults.baseURL = `${this.apiUrl}/api/`
        axios({
            method: "GET",
            url: "newsList?page=1",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(Response=>{
            this.setState({
                news_item: Response.data.news,
                news_item2: Response.data.news2,
                total_news_page: Response.data.page_number
            })
        })
    }
    paginate = (data)=>{
        this.setState({
            news_page: data
        })
        axios.defaults.baseURL = `${this.apiUrl}/api/`
        axios({
            method: "GET",
            url: "newsList?page="+data,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(Response=>{
            this.setState({
                news_item: Response.data.news,
                news_item2: Response.data.news2,
                total_news_page: Response.data.page_number
            })
        })
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="container-fluid" id="mainCont">
                    <Router>
                        <Navbar searchData={this.getSearch} pageCount={this.state.searchPage} hostName={this.apiUrl} />
                        <Switch>
                            <Route exact path="/Search">
                                <SearchView articleList={this.state.searchData}  hostName={this.apiUrl} />
                            </Route>
                            <Route exact path="/News">
                                <SlideShow items ={this.state.news_item2} hostName={this.apiUrl}/>
                                <News articleList={this.state.news_item} title="News" hostName={this.apiUrl}/>
                                <div className="mx-5"><PaginationNav page={this.paginate} page_num={this.state.total_news_page} /></div>
                                <hr />
                            </Route>
                            <Route exact path="/">    
                                <BigTitle/>
                                <LatestCont hostName={this.apiUrl}/> 
                            </Route>
                            <Route exact path="/Blogs">
                                <Articles prop={{
                                    title: "Blog/Articles"
                                }} hostName={this.apiUrl} />
                            </Route>
                            <Route exact path={"/article_view/:id"} component={View}/>
                            <Route exact path={"/news_view/:id"} component={View_News}/>
                        </Switch>
                        <Footer/>
                    </Router>
                </div>
            </React.Fragment>
         );
    }
}
 
export default MainCont;