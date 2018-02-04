import React from "react";
import PropTypes from "prop-types";
import book from "./Book.jpg";

function Book({
  title,
  description,
  authors,
  tags,
  year,
  link,
  countTotal,
  countCurrent
}) {
  const countRemaining = countTotal - countCurrent;

  return (
    <article className="card">
      <div className="card-header">
        <h4 className="card-title">
          {link ? (
            <a href={link} target="_blank">
              {title}
            </a>
          ) : (
            title
          )}
        </h4>
        <h5 className="card-subtitle text-gray">
          {authors.map(
            (author, index) =>
              `${author.text}${index !== authors.length - 1 ? ", " : ""}`
          )}
        </h5>
        <h6 className="card-subtitle text-gray">
          {tags.map(tag => (
            <span className="label mr-2" key={tag.id}>
              {tag.text}
            </span>
          ))}
        </h6>
      </div>
      <div className="card-image">
        <img className="img-responsive" src={book} alt="Book title" />
      </div>
      <div className="card-body">{description}</div>
      <div className="card-footer">
        <span className="label label-secondary">{`${year} год`}</span>
        <span className="label label-success ml-2">{`Осталось: ${countRemaining}`}</span>
      </div>
    </article>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  ),
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    })
  ),
  year: PropTypes.number.isRequired,
  link: PropTypes.string,
  countTotal: PropTypes.number.isRequired,
  countCurrent: PropTypes.number.isRequired
};

Book.defaultProps = {
  description: "",
  authors: [],
  tags: [],
  link: ""
};

export default Book;
