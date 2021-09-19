import React, { Component } from 'react';
import { Facebook, Twitter, Linkedin  } from 'react-bootstrap-icons';
import "./css/footer.css"

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="container mainFooter">
                    <div className="row">
                        <div className="col-12 col-md-6 text-center footer-icon py-1" style={{ lineHeight: "0em"}}>
                            <a href="https://www.facebook.com" className="text-dark fs-4 mx-2">
                                <Facebook/>
                            </a>
                            <a href="https://www.twitter.com" className="text-dark fs-4 mx-2">
                                <Twitter/>
                            </a>
                            <a href="https://www.Linkedin.com" className="text-dark fs-4 mx-2">
                                <Linkedin/>
                            </a>
                        </div>
                        <footer className="col-12 col-md-6 m-0 m-auto py-2" >
                            <div className="secondary fs-6 text-center">
                                &copy;Copyright 2021 all right reserved by Nurul Hafiz Likhon
                            </div>
                        </footer>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Footer;