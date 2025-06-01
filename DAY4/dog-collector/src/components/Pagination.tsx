import "./Pagination.css";

export interface PaginationProps {
    currentPage: number,
    totalPages: number,
    goToPreviousPage: () => void,
    goToNextPage: () => void,

}

function Pagination({currentPage, totalPages, goToPreviousPage, goToNextPage}: PaginationProps) {

    return (
        <div className="pagination_buttons">
            <button onClick={goToPreviousPage} disabled={currentPage === 1}>Previous</button>
            <span>Page {currentPage} of {totalPages}</span>
            <button onClick={goToNextPage} disabled={currentPage === totalPages}> Next</button>
        </div>
    )
}

export default Pagination;