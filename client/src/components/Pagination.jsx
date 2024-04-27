import React, { useRef } from "react";
import { FaCaretRight } from "react-icons/fa6";
import { FaCaretLeft } from "react-icons/fa6";
import "../css/Pagination.css";

const Pagination = ({ currentPage, setCurrentPage, nPages }) => {
  const contentRef = useRef(null);

  const next = () => {
    if (currentPage !== nPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const prev = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <div className="pagination-pages">
        <button onClick={prev}>
          <FaCaretLeft />
        </button>
        <p>
          <span>{currentPage} / {nPages}</span>
        </p>
        <button onClick={next} ref={contentRef}>
          <FaCaretRight />
        </button>
      </div>
    </>
  );
};

export default Pagination;
