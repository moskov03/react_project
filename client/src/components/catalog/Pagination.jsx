export default function Paginationn() {
    const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
        const pageNumbers = [];

        // Calculate the total number of pages
        for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
            pageNumbers.push(i);
        }

        const handleClick = (number, event) => {
            event.preventDefault(); // Prevent the default anchor click behavior
            paginate(number);       // Update the current page
        };

        return (
            <>
                <ul className="pagination">
                    {pageNumbers.map(number => (
                        <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                            <a
                                onClick={(e) => handleClick(number, e)}
                                href="!#"
                                className="page-link">
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}