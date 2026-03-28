import React, { type Dispatch, type SetStateAction } from "react";

const Pagintion = ({
  totalpages,
  currentPage,
  setCurrentPage,
}: {
  totalpages: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}) => {
  const handlePageChange = (pageNo: number) => {
    setCurrentPage(pageNo);
  };
  return (
    <div className="flex gap-3">
      {Array.from({ length: totalpages }).map((ele, index) => (
        <button
          onClick={() => handlePageChange(index + 1)}
          className={`border cursor-pointer py-1 px-3 ${currentPage === index + 1 ? "bg-green-400" : ""}`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagintion;
