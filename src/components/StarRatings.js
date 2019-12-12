import React, { Component } from "react";

class StarRatings extends Component {
  constructor(props) {
    super(props);
  }

  renderStars = (number) => {
    console.log(Math.round(number), "stars");
    let fillAmount = 'whole';
    // split number at decimal
    // // if not .5, if greater than 5, add 1, else add 0...
    // // I'd rather do this with math instead of coercion, convert with Number
    // // it might be anumber by default in the data structure

    // // if .5, half star
    const isHalf = number.includes('.5') ? true : false;
    const rounding = (number) => {
      if(!isHalf){
        return Math.round(Number('.' + number.split('.')[1]));
      }
    }
    console.log(rounding(number), "roundValue");
    // console.log(isHalf);
    // if
    return Array(Math.ceil(number)).fill(0).map((item, index) => { return (<span className={`${ (Math.round(number) === index ) && isHalf ? "half" : "whole"}`}>{item}</span>)});
  }

  render() {
    const { stars } = this.props;
    return (
      <div style={{ width: "100%" }}>{this.renderStars(stars)}</div>
    );
  }
}

StarRatings.propTypes = {

}

export default StarRatings;
