import React, { Component } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

class Carousel extends Component {
const 

  constructor(props) {
       super(props);
       this.CarouselData =  [
            {
                image:
                "/images/slider1.webp",
            },
            {
                image:
                "/images/slider2.webp",
            },
          
        ];
      

    this.state = {
      currentSlide: 0,
      paused: false,
    };
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.paused === false) {
        let newSlide =
          this.state.currentSlide === this.CarouselData.length - 1
            ? 0
            : this.state.currentSlide + 1;
        this.setState({ currentSlide: newSlide });
      }
    }, 3000);
  }

  nextSlide = () => {
    let newSlide =
      this.state.currentSlide === this.CarouselData.length - 1
        ? 0
        : this.state.currentSlide + 1;
    this.setState({ currentSlide: newSlide });
  };

  prevSlide = () => {
    let newSlide =
      this.state.currentSlide === 0
        ? this.CarouselData.length - 1
        : this.state.currentSlide - 1;
    this.setState({ currentSlide: newSlide });
  };

  setCurrentSlide = (index) => {
    this.setState({ currentSlide: index });
  };

  render() {
      return (
        <div className="flex justify-center bg-white ">
      <div className="container mx-auto">
        <div className=" h-96 flex justify-center items-center overflow-hidden relative">
          <AiOutlineLeft
            onClick={this.prevSlide}
            className="absolute left-0 text-3xl inset-y-1/2 text-green-500 cursor-pointer"
          />

          <Swipe onSwipeLeft={this.nextSlide} onSwipeRight={this.prevSlide}>
            {this.CarouselData.map((slide, index) => {
              return (
                <img
                  src={slide.image}
                  alt="This is a carousel slide"
                  key={index}
                  className={
                    index === this.state.currentSlide
                      ? "block w-full h-auto object-cover"
                      : "hidden"
                  }
                  onMouseEnter={() => {
                    this.setState({ paused: true });
                  }}
                  onMouseLeave={() => {
                    this.setState({ paused: false });
                  }}
                />
              );
            })}
          </Swipe>

          <div className="absolute w-full flex justify-center bottom-0">
            {this.CarouselData.map((element, index) => {
              return (
                <div
                  className={
                    index === this.state.currentSlide
                      ? "h-2 w-2 bg-blue-700 rounded-full mx-2 mb-2 cursor-pointer"
                      : "h-2 w-2 bg-white rounded-full mx-2 mb-2 cursor-pointer"
                  }
                  key={index}
                  onClick={() => {
                    this.setCurrentSlide(index);
                  }}
                ></div>
              );
            })}
          </div>

          <AiOutlineRight
            onClick={this.nextSlide}
            className="absolute right-0 text-3xl inset-y-1/2 text-green-500 cursor-pointer"
          />
        </div>
              </div>
              </div>
    );
  }
}

export default Carousel;