import React, { Component } from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';
import './Product.css';

class Product extends Component {
    constructor(props){
        super(props);
        this.openThumbnails.bind(this);
        this.closeThumbnails.bind(this);
    }

    openThumbnails(id){
        const elemId =  "thumbnails" + id;
        document.getElementById(elemId).style.width = "100%";
    }

    closeThumbnails(id){
        const elemId =  "thumbnails" + id;
        document.getElementById(elemId).style.width = "0%";
    }

    render(){
        const { id, name, priceRange, hero, images } = this.props;
        const overlayId = "thumbnails" + id;
        const thumbnailImages = images.map((image, idx ) => (
                <CarouselItem key = {idx}>
                    <img src = { image.href } key = {idx} alt = { hero.alt }  width = { image.width }  height = { image.height } />
                    <Carousel.Caption>
                        <p> Img : {idx} </p>
                    </Carousel.Caption>
                </CarouselItem>
            )); 
        return (
            <div className = "product-detail col-md-3 col-sm-12 col-xs-12" >
                <a href = "javascript:void(0)" onClick={this.openThumbnails.bind( this, id)} >
                    <img src = { hero.href } alt = { hero.alt } width = "100%"  height = {hero.height + 'px'} />
                </a>

                <div id= {overlayId} className="overlay">
                    <a href="javascript:void(0)" className="closebtn" onClick={this.closeThumbnails.bind( this, id)} >&times;</a>
                    <div className="overlay-content">
                    <Carousel>
                        { thumbnailImages }
                    </Carousel>
                    </div>
                </div>

                <div>
                    <h3 >{ name }</h3>
                    <p className = "product-mrp">MRP : { priceRange.selling.high }  </p>
                    <p className = "product-offer-price">Offer Price : { priceRange.selling.low }</p>
                </div>   
            </div>
        );
    }
}


export default Product;