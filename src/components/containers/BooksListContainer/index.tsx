import { useState, useEffect, FC } from "react";
import { BooksList, FormatedText, SpinnerLoader } from "../..";
import { useGoogleBooksApi } from "../../../util/hooks/useGoogleBooksApi";
import { IBooksListContainer } from "./IBooksListContainer";
import "./styles.css";
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
    return (
      <div style={{ margin: "2rem 0" }}>
        <FormatedText
          text="please check your connection and try again"
          Tag="h3"
          textTransform="capitalize"
          textSize="L"
          textColor="primary_shd1"
          textType="title"
        />
      </div>
    );
  }
  if (data) {
    const { totalItems } = data;
    return (
      <div>
        <BooksList data={data} />
        {totalItems > 0 && (
          <div className="pagaination_wrapper">
            <button
              className="prev_btn"
              disabled={page < 1}
              onClick={getPreviousPage}
            >
              {" "}
              previous{" "}
            </button>
            <button className="next_btn" onClick={getNextPage}>
              next
            </button>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div style={{ margin: "2rem 0" }}>
        <FormatedText
          text="search for your favorite books"
          Tag="h3"
          textTransform="capitalize"
          textSize="L"
          textColor="primary_shd1"
          textType="title"
        />
      </div>
    );
  }
};

export default BooksListContainer;
