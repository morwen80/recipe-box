import React from 'react';

class Pagination extends React.Component {
  render(){
    const { recipes, recipesPerPage, handlePageNumber } = this.props
    const pageNumbers = [];

    for (let i = 1; i <=  Math.ceil(recipes.length / recipesPerPage) ; i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map( number =>
        <li
          className="page-item"
          key={number}
          id={number}
          onClick={handlePageNumber}
          >
          {number}
        </li>
    )

    return(
      <React.Fragment>
        <nav aria-label="Page navigation">
          {renderPageNumbers.length > 1 ?
          <ul className="pagination"> {renderPageNumbers} </ul>
          :
          <ul></ul>
        }
      </nav>
      </React.Fragment>
    )
  }
}

export default Pagination
