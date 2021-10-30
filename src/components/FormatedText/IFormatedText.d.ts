declare namespace IFormatedText {
  interface IProps {
    text: string;
    textSize: "XS" | "S" | "M" | "L" | "XL";
    Tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
    textType: "heading" | "title" | "noraml";
    textColor:
      | "primary"
      | "primary_shd1"
      | "primary_shd2"
      | "primary_shd3"
      | "primary_shd4";
    textTransform: "capitalize" | "uppercase" | "lowercase";
  }
}

export { IFormatedText };
