import { FC } from "react";
import { IFormatedText } from "./IFormatedText";
import classNames from "classnames";
import "./styles.css";
const FormatedText: FC<IFormatedText.IProps> = ({
  text,
  textSize = "M",
  Tag = "p",
  textType = "noraml",
  textColor = "primary",
  textTransform,
}): JSX.Element => {
  return (
    <Tag
      className={classNames({
        // font-sixe
        "text-xs": textSize === "XS",
        "text-s": textSize === "S",
        "text-m": textSize === "M",
        "text-l": textSize === "L",
        "text-xl": textSize === "XL",
        //font-weight
        "text-heading": textType === "heading",
        "text-title": textType === "title",
        "text-normal": textType === "noraml",
        //color
        "text-primary": textColor === "primary",
        "text-primary-shd1": textColor === "primary_shd1",
        "text-primary-shd2": textColor === "primary_shd2",
        "text-primary-shd3": textColor === "primary_shd3",
        "text-primary-shd4": textColor === "primary_shd4",
        //text ttransform
        "text-capitalize": textTransform === "capitalize",
        "text-uppercase": textTransform === "uppercase",
        "text-lowercase": textTransform === "lowercase",
        "transform-none": textTransform === "none",
      })}
    >
      {text}
    </Tag>
  );
};

export default FormatedText;
