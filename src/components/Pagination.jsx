const Pagination = ({postsPerPage, totalPosts, paginate, currentPage}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++)
    pageNumbers.push(i);
  return (
    <nav aria-label="Page navigation example" className="mt-4">
      <ul className="pagination justify-content-center">
        {pageNumbers.map((num) => (
          <li className="page-item" key={num}>
            <a
              onClick={() => paginate(num)}
              className={`page-link ${currentPage === num ? "active" : ""}`}
            >
              {num}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
