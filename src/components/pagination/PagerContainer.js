import React, { Component } from "react";
import PropTypes, { array } from "prop-types";

import Page from './Page';
import PagedData from "./PagedData";
import PageSize from './PageSize';

class PagerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      pageSize: 5
    }
  }

  // pagedData = (pageSize, activePage) => {
  //   let sizedData = [];
  //   let sizeData = () => {
  //
  //     sizedData = this.props.DATA.slice((pageSize * (activePage - 1)), (pageSize * activePage))
  //   }
  //   if(sizedData.length === 0) {
  //     this.setState({ activePage: 1 })
  //   }
  //   return sizedData;
  // }

  // pagedData = (pageSize) => {
  //   let sizedData = [];
  //   sizedData = this.props.DATA.slice((pageSize * (this.state.activePage - 1)), (pageSize * this.state.activePage))
  //   if(sizedData.length === 0) {
  //     this.setState({ activePage: 1 })
  //   }
  //   let thisData = sizedData.map((item, index) => {
  //     return (
  //       <tr key={index}>
  //         <td>{item.firstName}</td>
  //         <td>{item.lastName}</td>
  //         <td>{item.favoriteMovie}</td>
  //       </tr>
  //     )
  //   });
  //   return thisData;
  // }

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

  renderPageData = () => {
    // console.log(PagedData(this.state.pageSize, this.state.activePage, this.props.DATA), "PAGEDDATA");
    return PagedData(this.state.pageSize, this.state.activePage, this.props.DATA);
  }

  render() {
   {console.log(PagedData(this.state.pageSize, this.state.activePage, this.props.DATA), "PAGEDDATA")}
    const { classes, renderSizedData, pageSizes } = this.props;

    return (
      <div className={`c-pager ${classes}`}>
        <PageSize onChange={(e) => this.pageSize(e)} pageSizes={pageSizes}/>
          <table className="c-table">
            <tbody>
            <tr><th>First Name</th><th>Last Name</th><th>Favorite Movie</th></tr>
            {this.renderPageData()}

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

PagerContainer.propTypes = {
  DATA: array
}

export default PagerContainer;
