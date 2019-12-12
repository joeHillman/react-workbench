import React, { Component } from "react";
import CardConfig from './_children/configs';
import data from './_children/data';

class StoryCard extends Component {
  render() {
    return (
      <div>StoryCard
      {CardConfig["heading-overline"](data)}
      </div>
    );
  }
}

StoryCard.propTypes = {

}

export default StoryCard;
