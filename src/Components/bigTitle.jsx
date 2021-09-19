import React, { Component } from 'react';
import {Facebook} from "react-bootstrap-icons"
import img1 from "../images/new.svg"


class BigTitle extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="container-sm big-title bg-light">
                    <div className="row">
                        <div className="col-12 col-md-6 order-md-2">
                            <img src={img1} alt="altimg" className="img-fluid m-auto" />
                        </div>
                        <div className="col-12 col-md-6 order-md-1">
                            <div className="fs-1">
                                Wellcome to my personal blog page.
                            </div>
                            <div className="fs-3 text-secondary">
                                My personal blog represent my own knowledge. I hope you guys will learn something
                                new and usefull from my personal blog. Here you can find various way to create 
                                HTML, CSS3, Javascript, Python, Django and React.
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 my-2">
                            <a href="http://devlikhon.pythonanywhere.com/" className="btn btn-outline-primary btn-lg">My Website</a>
                            <a href="Blogs" className="btn btn-outline-success btn-lg mx-1">Browse Articles</a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default BigTitle;