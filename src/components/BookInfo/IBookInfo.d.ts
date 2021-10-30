declare namespace IBookInfo {
  export interface IProps {
    title: string;
    subtitle: string;
    authors: Array<string>;
    publisher: string;
    publishedDate: string;
    description: string;
    previewLink: string;
    imageLinks: Array<>;
  }
}

export { IBookInfo };
