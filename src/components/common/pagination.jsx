
import { FaArrowRightLong } from "react-icons/fa6";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex items-center gap-2 mt-[18px]">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={`h-10 w-10 text-[#242628] flex items-center justify-center rounded-full text-base transition-colors ${
            currentPage === pageNumber ? "bg-[#B68756] text-white" : "hover:bg-gray-100"
          }`}
        >
          {pageNumber}
        </button>
      ))}
      {currentPage < totalPages && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100"
          aria-label="Next page"
        >
          <FaArrowRightLong className="text-[24px] text-[#242628]" />
        </button>
      )}
    </div>
  )
}

export default Pagination;

