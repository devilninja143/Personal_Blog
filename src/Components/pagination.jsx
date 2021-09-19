import React, { Component } from 'react';
import axios from 'axios';

class PaginationNav extends React.Component {

    state = {
        page_no: 1,
        page_num: this.props.page_num
    }
    componentDidMount(){

    }
    handlePageChangeUp = (event)=>{
        event.preventDefault();
        let page;
        if(this.props.page_num > this.state.page_no){
            page = this.state.page_no + 1
        }else{
            page = 1
        }
        this.setState({
            page_no: page
        })
        this.props.page(page)
    }
    handlePageChangeDown = (event)=>{
        event.preventDefault();
        let page;
        if(this.state.page_no > 1){
            page = this.state.page_no - 1
        }else{
            page = this.props.page_num
        }
        this.setState({
            page_no: page
        })
        this.props.page(page)
    }
    render() { 
        return (<div>
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
        </div>);
    }
}
 
export default PaginationNav;