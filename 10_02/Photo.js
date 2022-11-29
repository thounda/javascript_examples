/**
 * Fragment from React Photo Gallery component.
 * By Sandra Gonzales @neptunian
 * @link https://github.com/neptunian/react-photo-gallery
 * The MIT License (MIT)
 * Copyright (c) 2015-2018 Sandra Gonzales
 */

/*  if you understand the fundamentals of JavaScript itself, you'll be able to understand what is going on inside a JavaScript Framework like React even if you don't know the framework or the framework specific language.
 */

// Two statements, below, are hooking those two scripts into local file for use
import React from "react";
import PropTypes from "prop-types";

// Constant is defined with objects
const imgWithClick = { cursor: "pointer" };

const Photo = ({
  index,
  onClick,
  photo,
  margin,
  direction,
  top,
  left,
  key,
}) => {
  const imgStyle = { margin: margin, display: "block" };
  if (direction === "column") {
    imgStyle.position = "absolute";
    imgStyle.left = left;
    imgStyle.top = top;
  }

  const handleClick = (event) => {
    onClick(event, { photo, index });
  };

  return (
    <img
      key={key}
      style={onClick ? { ...imgStyle, ...imgWithClick } : imgStyle}
      {...photo}
      onClick={onClick ? handleClick : null}
    />
  );
};

export const photoPropType = PropTypes.shape({
  key: PropTypes.string,
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  alt: PropTypes.string,
  title: PropTypes.string,
  srcSet: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  sizes: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
});

Photo.propTypes = {
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  photo: photoPropType.isRequired,
  margin: PropTypes.number,
  top: (props) => {
    if (props.direction === "column" && typeof props.top !== "number") {
      return new Error(
        "top is a required number when direction is set to `column`"
      );
    }
  },
  left: (props) => {
    if (props.direction === "column" && typeof props.left !== "number") {
      return new Error(
        "left is a required number when direction is set to `column`"
      );
    }
  },
  direction: PropTypes.string,
};

export default Photo;

/*
Understanding the fundamentals of JavaScript gives you the tools and language you need to be able to understand what is going on in JavaScript frameworks because JavaScript frameworks are built on top of Vanilla JavaScript. Now you have the tools and you are ready to get started on your learning journey to extend your knowledge into JavaScript Frameworks as well...
*/
