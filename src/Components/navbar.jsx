import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js"
import {List} from "react-bootstrap-icons";
import "./css/navbar.css"
import {Link, withRouter} from "react-router-dom"
import Logo_1 from "../images/creative programmer log.svg"
import axios from 'axios';


class Navbar extends Component {
    state = { 
        searchValue : "",
        csrfValue: "",
        items: [],
        location: "/"
     }
    searchItem = this.state.items;
    submitSearch = (event)=>{
        event.preventDefault();
        let searchData = event.target.value

        this.setState({
            searchValue: event.target.value
        })
        this.props.searchData(event.target.value)
    }
    submitData = (event)=>{
        console.log("changes");
        document.location.pathname = "/Search";
    }
    colorChange = (e)=>{
        if(document.location.pathname === "/"){
        }
    }
    componentDidMount(){
        switch(window.location.pathname){
            case "/":
                console.log("home");
                break
            case "/Blogs":
                console.log("Blog");
                break
            case "/News":
                console.log("News");
                break
        }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="navbar navbar-expand-lg nav-top">
                    <div className="container-fluid">
                        <a href="/" className="navbar-brand text-warning">
                            <img src={Logo_1} alt="" style={{
                                height: "40px"
                            }} />
                        </a>
                        <div className="collapse navbar-collapse px-5 MainNavbar" id="MainNavbar">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                                <li className="nav-item">
                                <form className="d-none form-search-1 m-2" onSubmit={this.submitData}>
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name="searchInput" onChange={this.submitSearch} />
                                    <Link to="/Search">
                                        <button className="btn btn-success" type="submit">Search</button>
                                    </Link>
                                </form>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="text-decoration-none">
                                        <span className="nav-link active text-info fs-5" aria-current="page" onClick={this.colorChange} >Home</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Blogs" className="text-decoration-none" >
                                        <a className="nav-link text-light fs-5" >Blog/Articles</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    {/* <Link to="/News" className="text-decoration-none" > */}
                                        <a className="nav-link text-light fs-5" href="/News" >News</a>
                                    {/* </Link> */}
                                </li>
                            </ul>
                        </div>
                        <form className="d-flex form-search-2 mx-4" onSubmit={this.submitData}>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name="searchInput" onChange={this.submitSearch} />
                            <Link to="/Search">
                                <button className="btn btn-success" type="submit">Search</button>
                            </Link>
                            
                        </form>
                        <button className="navbar-toggler mx-4" type="button" data-bs-toggle="collapse" data-bs-target=".MainNavbar" aria-controls=".MainNavbar" aria-expanded="false" style={{border: "1px var(--bs-light) solid"}}>
                            <List style={{fontSize: "30px", color: "var(--bs-light)"}} />
                        </button>
                        
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default withRouter(Navbar);