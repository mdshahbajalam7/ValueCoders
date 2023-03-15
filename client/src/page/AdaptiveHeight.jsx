import React, { Component } from "react";
import Slider from "react-slick";

export default class AdaptiveHeight extends Component {
    render() {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <h2>Fade</h2>
                <Slider {...settings}>
                    <div>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/d78gD-wwVTg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/d78gD-wwVTg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/d78gD-wwVTg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/d78gD-wwVTg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </Slider>
            </div>
        );
    }
}