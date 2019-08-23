import React from 'react';
import {Carousel} from 'react-bootstrap'

class CarouselBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            interval: null,
        }
    }

    render () {
        return (
            <Carousel interval={this.state.interval}>
                {this.buildCarousel()}
            </Carousel>  
        );
    }

    buildCarousel = () => {
        let list = [];
        for (let i = 0; i < this.props.gifs.length; i++) {
            let item = this.props.gifs[i];
            list.push (
                <Carousel.Item key={i} >
                <img
                    className="img-fluid"
                    alt={this.props.category}
                    src={item.images.fixed_height.url}
                />
                </Carousel.Item>
            );
        }
        return list;
    }
}
export default CarouselBox;