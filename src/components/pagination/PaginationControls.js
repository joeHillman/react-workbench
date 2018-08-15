import React, { Component } from "react";
import PropTypes, { array, string } from "prop-types";

import Page from "./Page";
import PageSize from "./PageSize";

class PaginationControls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      pageSize: 5,
      sizedData: []
    }
  }

  componentDidMount() {
    this.setState({
      sizedData: this.props.DATA.slice((this.state.pageSize * (this.state.activePage - 1)), (this.state.pageSize * this.state.activePage))
    })
  }

  reSizeData = () => {
    this.setState(() => {}, function() {
      this.setState({
        sizedData: this.props.DATA.slice((this.state.pageSize * (this.state.activePage - 1)), (this.state.pageSize * this.state.activePage))
      });
    })
  }

  selectPage = (index) => {
    this.setState({ activePage: index });
    this.reSizeData();
  }

  selectPrevious = () => {
    this.setState((prevState) => ({ activePage: prevState.activePage - 1 }));
    this.reSizeData();
  }

  selectNext = () => {
    this.setState((prevState) => ({ activePage: prevState.activePage + 1 }));
    this.reSizeData();
  }

  selectFirst = () => {
    this.setState({ activePage: 1 });
    this.reSizeData();
  }

  selectLast = () => {
    this.setState({ activePage: Math.ceil(this.props.DATA.length / this.state.pageSize) })
    this.reSizeData();
  }

  configureButtons = () => {
    let numberOfPages = Math.ceil(this.props.DATA.length / this.state.pageSize);
    let buttonCount = [];
    while(buttonCount.length < numberOfPages) {
      buttonCount.push("x");
    }
    return buttonCount;
  }

  pageButtons = () => {
    let buttonCount = this.configureButtons();
    let buttons = buttonCount.map((item, index) => {
      return <Page key={index} label={index + 1} onClick={() => this.selectPage(index +1)} isActive={this.state.activePage === (index + 1) ? true : false} />
    });

    return buttons;
  }

  pageSize = (e) => {
    let pageSizeNum = Number(e.target.value);
    this.setState({
      pageSize: pageSizeNum,
      sizedData: this.props.DATA.slice((pageSizeNum * (this.state.activePage - 1)), (pageSizeNum * this.state.activePage))
   }, function() {
     if(this.state.sizedData.length === 0) {
       this.selectLast();
     }
   });
  }

  render() {
    const { classes, pageSizes } = this.props;

    return (
      <div className={`c-pager ${classes}`}>
        <PageSize onChange={(e) => this.pageSize(e)} pageSizes={pageSizes}/>
        {this.props.render(this.state)}

        <div className={`c-pager__page-buttons ${this.state.activePage !== 1 ? "c-pager--show-fp" : ""} ${this.state.activePage === (Math.ceil(this.props.DATA.length / this.state.pageSize)) ? "c-pager--hide-ln" : ""}`}>
          <span className="c-pager__flnp c-pager__fp">
            <Page label="<<" onClick={() => this.selectFirst()} isActive={false}/>
            <Page label="<" onClick={() => this.selectPrevious()} isActive={false}/>
          </span>
          {this.pageButtons(this.configureButtons())}
          <span className="c-pager__flnp c-pager__ln">
            <Page label=">" onClick={() => this.selectNext()} isActive={false}/>
            <Page label=">>" onClick={() => this.selectLast()} isActive={false}/>
          </span>
        </div>
      </div>
    );
  }
}

PaginationControls.propTypes = {

}

export default PaginationControls;
