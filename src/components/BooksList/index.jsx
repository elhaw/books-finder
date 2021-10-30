import { BookInfo } from "../";
import FormatedText from "../FormatedText";
import "./styles.css";
const BooksList = ({ data }) => {
  const { items, totalItems } = data;
  return (
    <>
      {totalItems > 0 && (
        <div className="all_books_wrapper">
          {items?.map(
            (
              {
                volumeInfo: {
                  title,
                  subtitle,
                  authors,
                  publisher,
                  publishedDate,
                  description,
                  imageLinks,
                  previewLink,
                },
              },
              index
            ) => {
              return (
                <BookInfo
                  key={index}
                  title={title}
                  subtitle={subtitle}
                  authors={authors}
                  publisher={publisher}
                  publishedDate={publishedDate}
                  description={description}
                  imageLinks={imageLinks}
                  previewLink={previewLink}
                />
              );
            }
          )}
        </div>
      )}
      {totalItems < 1 && (
        <div style={{ margin: "2rem 0" }}>
          <FormatedText
            text="no search result found"
            Tag="span"
            textTransform="none"
            textSize="M"
            textColor="primary_shd2"
            textType="title"
          />
        </div>
      )}
    </>
  );
};

export default BooksList;
