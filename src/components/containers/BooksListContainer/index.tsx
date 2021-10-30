import { useState, useEffect, FC } from "react";
import { BooksList, SpinnerLoader } from "../..";
import { useGoogleBooksApi } from "../../../util/hooks/useGoogleBooksApi";
import { IBooksListContainer } from "./IBooksListContainer";
const BooksListContainer: FC<IBooksListContainer.IProps> = ({
  searchQuery,
}): any => {
  const [page, setPage] = useState(0);
  const { data, loading, dataError, getData } = useGoogleBooksApi(
    `volumes?q=${searchQuery}&startIndex=${page * 10}&maxResults=10`
  );
  const getNextPage = () => {
    setPage(page + 1);
  };

  const getPreviousPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };
  useEffect(() => {
    if (searchQuery.length > 0) {
      getData();
    }
  }, [page, searchQuery]);

  if (loading) {
    return (
      <div style={{ margin: "2rem 0" }}>
        <SpinnerLoader />
      </div>
    );
  }
  if (dataError) {
    return <h2>error</h2>;
  }
  if (data) {
    return (
      <div>
        <BooksList data={data} />
        <button onClick={getNextPage}>next</button>
        <button disabled={page < 1} onClick={getPreviousPage}>
          {" "}
          previous{" "}
        </button>
      </div>
    );
  } else {
    return "search for your favorite book";
  }
};

export default BooksListContainer;
