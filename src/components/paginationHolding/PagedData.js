import React from "react";
// import { PaginationData } from "../../stories/TestData/PaginationData";

const PagedData = (pageSize, activePage, DATA) => {
  let sizedData = DATA.slice((pageSize * (activePage - 1)), (pageSize * activePage));
  // let sizeData = () => {
  //
  //
  // }
  // if(sizedData.length === 0) {
  //   this.setState({ activePage: 1 })
  // }
  // console.log(RenderSizedData(sizedData), "RenderSizedFunction");
  RenderSizedData(sizedData);
}

const RenderSizedData = (arr) => {
    let thisData = arr.map((item, index) => {
    return (
      <tr key={index}>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
        <td>{item.favoriteMovie}</td>
      </tr>
    )});
    return thisData;
  };

export default PagedData;
