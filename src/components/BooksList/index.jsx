import { BookInfo } from "../";
const BooksList = ({ data }) => {
  const { items } = data;
  return (
    <div>
      {items.map(
        ({
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
        }) => {
          return (
            <BookInfo
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
  );
};

export default BooksList;
