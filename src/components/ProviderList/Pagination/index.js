import React from "react";

const Pagination = ({ totalPosts, currentPage, paginate }) => {
  const pageNumbers = [];
  // változó feltöltése a lapozóhoz szükséges számsorral 
  for (let i = 1; i <= Math.ceil(totalPosts / 10); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <nav className="pagination">
        <ul>
          <li
            className={`${pageNumbers[0] === currentPage && "disabled"}`}
            onClick={() => paginate(currentPage - 1)}
          >
            Previous
          </li>
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`${currentPage === number && "active"}`}
              onClick={() => paginate(number)}
            >
              {number}
            </li>
          ))}
          <li
            className={`${
              pageNumbers.reverse()[0] === currentPage && "disabled"
            }`}
            onClick={() => paginate(currentPage + 1)}
          >
            Next
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;