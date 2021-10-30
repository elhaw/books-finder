import { FC } from "react";
import { FormatedText } from "../../components";
import { IBookInfo } from "./IBookInfo";
import "./styles.css";
const BookInfo: FC<IBookInfo.IProps> = ({
  title,
  authors,
  publisher,
  previewLink,
  imageLinks,
}) => {
  const thumbnail = imageLinks?.thumbnail;
  const smallThumbnail = imageLinks?.smallThumbnail;
  return (
    <div className="book_wrapper">
      <div className="book_wrapper-image">
        <img src={thumbnail || smallThumbnail} alt={title} />
      </div>
      <div className="book_wrapper-info">
        <FormatedText
          text={title}
          Tag="h3"
          textTransform="capitalize"
          textSize="L"
          textColor="primary_shd1"
          textType="title"
        />
        <div className="book_wrapper-info-authors">
          <FormatedText
            text="by: "
            Tag="span"
            textTransform="capitalize"
            textSize="M"
            textColor="primary_shd2"
            textType="title"
          />
          {authors?.length < 1 && (
            <FormatedText
              text="No authors found"
              Tag="span"
              textTransform="none"
              textSize="M"
              textColor="primary_shd2"
              textType="title"
            />
          )}
          {authors?.length > 0 &&
            authors.map((author, index) => {
              return (
                <FormatedText
                  key={index}
                  text={author}
                  Tag="span"
                  textTransform="none"
                  textSize="M"
                  textColor="primary_shd2"
                  textType="title"
                />
              );
            })}
        </div>

        <div className="book_wrapper-info-publisher">
          <FormatedText
            text={`published by : ${publisher}`}
            Tag="span"
            textTransform="capitalize"
            textSize="M"
            textColor="primary_shd2"
            textType="title"
          />
        </div>
        <div className="book_more_details">
          <a className="" rel="noreferrer" href={previewLink} target="_blank">
            {" "}
            see this book
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookInfo;
