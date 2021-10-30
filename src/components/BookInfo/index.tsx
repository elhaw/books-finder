import { FC } from "react";
import { FormatedText } from "../../components";
import { IBookInfo } from "./IBookInfo";
const BookInfo: FC<IBookInfo.IProps> = ({
  title,
  subtitle,
  authors,
  publisher,
  publishedDate,
  description,
  previewLink,
  imageLinks,
}) => {
  return (
    <div className="book_wrapper">
      <div>
        <img src="" alt="" />
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
      </div>
    </div>
  );
};

export default BookInfo;
