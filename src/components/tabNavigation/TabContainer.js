import React, { Component } from "react";
import PropTypes, { array } from "prop-types";

import Tab from "./Tab";
import TabRender from "./TabRender";

class TabContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1
    }
  }

  thisMenu = (arr) => {
    // filter out tabs that could be awaiting content or need to be removed temporarily
    const contentTabs = arr.filter(item => item.content !== null);

    const theseTabs = contentTabs.map((item, index) => {
      let activeMarker = () => {
        item.onClick( index );
        this.setState({ activeTab: index + 1 });
      }
      return (<Tab label={item.label} onClick={() => activeMarker(index)} key={index} isActive={this.state.activeTab === (index + 1)}/>)
    });
    return {theseTabs: theseTabs, contentTabs: contentTabs};
  }

  panelContent = () => {
    const thisContent = this.thisMenu(this.props.menuObj).contentTabs[this.state.activeTab - 1].content;
    return thisContent;
  }

  render() {
    const { menuObj } = this.props
    return (
      <div className="c-tab-container">
        <TabRender>{this.thisMenu(menuObj).theseTabs}</TabRender>
        <div className="c-tab-content">{this.panelContent()}</div>
      </div>
    );
  }
}

TabRender.propTypes = {
  menuObj: array.isRequired
}

export default TabContainer;
