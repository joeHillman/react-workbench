import React, { Component } from 'react';
import { Breakpoints, MediaList, FilterMediaResult } from './_utilities/MatchMedia';

class MatchMedia extends Component {

    // assemble the matchMedia objects at runtime
    // using max width, find only cares about the first one it matches
    assembleMatchQueries = (arr) => {
      return arr.map((item, index) => {
        return Object.assign(item, {
          mqList: window.matchMedia((`(max-width: ${Breakpoints[index]})`)),
        });
      });
    };

    GetPlaceholder = (mq) => {
      if(mq) {
        if (matchMedia) {
          if (mq.mqList.matches) {
            return mq.videoPlaceholderWidth;
          }
          // if there is no match, use 780, that accomodates all breakpoints
        }
      }
      else { return 780; }
    };
    /* eslint-enable */
      // width: GetPlaceholder(FilterMediaResult(assembleMatchQueries(MediaList))),

  render() {
    console.log(this.assembleMatchQueries(MediaList));
    console.log(FilterMediaResult(this.assembleMatchQueries(MediaList)));
    console.log(this.GetPlaceholder(FilterMediaResult(this.assembleMatchQueries(MediaList))))
    return(
      <div>Match Media</div>
    )
  }
}

export default MatchMedia;
