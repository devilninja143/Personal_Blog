import React, { Component } from 'react';
import "bootstrap/dist/js/bootstrap.bundle.js"
import Card2 from './card2';



class SlideShow extends Component {
    state = { 
        
     }
    render() { 
        return ( 
            <React.Fragment>
                <div id="mainCarousel" className="carousel carousel-dark slide bg-dark col-12 col-md-11 col-lg-10 m-auto" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        {this.props.items.map((news, index)=>{
                            if(index < 3){
                                if(index === 0){
                                    return <div className="carousel-item active" data-bs-interval="2000">
                                                <Card2 items={news} hostName={this.props.hostName}/> 
                                            </div>
                                }
                                else{
                                    return <div className="carousel-item" data-bs-interval="2000">
                                                <Card2 items={news} hostName={this.props.hostName}/> 
                                            </div>
                                }
                            }
                        
                        })}
                        
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </React.Fragment>
         );
    }
}
 
export default SlideShow;