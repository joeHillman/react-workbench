import React, { Component } from "react";
import PropTypes, { array, string } from "prop-types";

import Page from "../components/pagination/Page";
import PageSize from "../components/pagination/PageSize";

class StaffListPaginationBasic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      pageSize: 5
    }
  }

  pagedData = (pageSize) => {
    let sizedData = [];
    sizedData = this.props.DATA.slice((pageSize * (this.state.activePage - 1)), (pageSize * this.state.activePage))
    if(sizedData.length === 0) {
      this.setState({ activePage: 1 })
    }
    let thisData = sizedData.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
          <td>{item.position}</td>
          <td>{item.clockedIn}</td>
        </tr>
      )
    });
    return thisData;
  }

  selectPage = (index) => {
    this.setState({ activePage: index })
  }

  selectPrevious = () => {
    this.setState((prevState) => ({ activePage: prevState.activePage - 1 }))
  }

  selectNext = () => {
    this.setState((prevState) => ({ activePage: prevState.activePage + 1 }))
  }

  selectFirst = () => {
    this.setState({ activePage: 1 })
  }

  selectLast = () => {
    this.setState({ activePage: Math.ceil(this.props.DATA.length / this.state.pageSize) })
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
    let pageSizeNum = Number(e.target.value)
    this.setState({ pageSize: pageSizeNum })
  }

  render() {
    const { classes, pageSizes } = this.props;

    return (
      <div className={`c-pager ${classes}`}>
        <PageSize onChange={(e) => this.pageSize(e)} pageSizes={pageSizes}/>
          <table className="c-table">
            <tbody>
            <tr><th>First Name</th><th>Last Name</th><th>Position</th><th>Clocked In</th></tr>
            {this.pagedData(this.state.pageSize)}
            </tbody>
          </table>
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

StaffListPaginationBasic.propTypes = {
  classes: string,
  DATA: array,
  pageSizes: array
}

export default StaffListPaginationBasic;
