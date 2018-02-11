import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classnames from "classnames";
import Button from "../Button/Button";
import FormElementWrapper from "../FormElementWrapper/FormElementWrapper";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";
import { addBook } from "../../actions/books";

const defaultState = {
  title: "",
  description: "",
  authors: "",
  tags: "",
  year: "",
  link: "",
  countTotal: ""
};

class BookModal extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    headerText: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    actions: PropTypes.shape({
      addBook: PropTypes.func.isRequired
    }).isRequired
  };

  static defaultProps = {
    isOpen: false
  };

  state = defaultState;

  close = () => {
    this.setState(defaultState);
    this.props.onClose();
  };

  handleFormElementChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  submit = event => {
    const { actions, onClose } = this.props;
    const { authors, tags } = this.state;

    event.preventDefault();
    actions.addBook({
      ...this.state,
      authors: authors.split(",").map(author => ({ name: author.trim() })),
      tags: tags.split(",").map(tag => ({ text: tag.trim() }))
    });
    onClose();
    this.setState(defaultState);
  };

  render() {
    const { isOpen, headerText } = this.props;
    const {
      title,
      description,
      authors,
      tags,
      year,
      link,
      countTotal
    } = this.state;

    return (
      <section className={classnames("modal", { active: isOpen })}>
        <div
          className="modal-overlay"
          onClick={this.close}
          role="presentation"
        />
        <form className="modal-container">
          <header className="modal-header">
            <div className="float-right">
              <Button type="clear" onClick={this.close} />
            </div>
            <h5 className="modal-title h5">{headerText}</h5>
          </header>
          <div className="modal-body">
            <FormElementWrapper htmlFor="modal-title" label="Название">
              <Input
                id="modal-title"
                name="title"
                value={title}
                onChange={this.handleFormElementChange}
                placeholder="Название"
              />
            </FormElementWrapper>
            <FormElementWrapper htmlFor="modal-description" label="Описание">
              <Textarea
                id="modal-description"
                name="description"
                value={description}
                onChange={this.handleFormElementChange}
                placeholder="Описание"
              />
            </FormElementWrapper>
            <FormElementWrapper htmlFor="modal-authors" label="Авторы">
              <Input
                id="modal-authors"
                name="authors"
                value={authors}
                onChange={this.handleFormElementChange}
                placeholder="Авторы"
              />
            </FormElementWrapper>
            <FormElementWrapper htmlFor="modal-tags" label="Теги">
              <Input
                id="modal-tags"
                name="tags"
                value={tags}
                onChange={this.handleFormElementChange}
                placeholder="Теги"
              />
            </FormElementWrapper>
            <FormElementWrapper htmlFor="modal-year" label="Год">
              <Input
                id="modal-year"
                name="year"
                value={year}
                onChange={this.handleFormElementChange}
                placeholder="Год"
                type="number"
              />
            </FormElementWrapper>
            <FormElementWrapper htmlFor="modal-link" label="Ссылка">
              <Input
                id="modal-link"
                name="link"
                value={link}
                onChange={this.handleFormElementChange}
                placeholder="Ссылка"
                type="url"
              />
            </FormElementWrapper>
            <FormElementWrapper htmlFor="modal-count-total" label="Количество">
              <Input
                id="modal-count-total"
                name="countTotal"
                value={countTotal}
                onChange={this.handleFormElementChange}
                placeholder="Количество"
                type="number"
              />
            </FormElementWrapper>
          </div>
          <footer className="modal-footer">
            <Button isSubmit type="primary" onClick={this.submit}>
              Сохранить
            </Button>
            <Button type="link" onClick={this.close}>
              Отменить
            </Button>
          </footer>
        </form>
      </section>
    );
  }
}

export default connect(null, dispatch => ({
  actions: bindActionCreators({ addBook }, dispatch)
}))(BookModal);
