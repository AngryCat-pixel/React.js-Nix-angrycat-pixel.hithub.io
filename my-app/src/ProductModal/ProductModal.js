import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ProductModal.css";

export class ProductModal extends Component {
  static propTypes = {
    onAddItemClick: PropTypes.func,
    onEditItemClick: PropTypes.func,
    onCloseProductModalClick: PropTypes.func,
  };
  constructor(props) {
    super(props);
    this.state = {
      name: props.product?.color || "",
      category: props.product?.type || "",
    };
  }

  render() {
    return (
      <div className="modalForm">
        <form
          onSubmit={() => {
            this.props.product?.id
              ? this.props.onEditItemClick({
                  ...this.state,
                  id: this.props.product.id,
                })
              : this.props.onAddItemClick(this.state);
          }}
        >
          <p>Name:</p>
          <input
            value={this.state.name}
            onChange={(event) => {
              this.setState({ name: event.target.value });
            }}
          />
          <p>Category:</p>
          <input
            value={this.state.category}
            onChange={(event) => {
              this.setState({ category: event.target.value });
            }}
          />
          <br />
          <br />
          <button className="edit-btn">
            {this.props.product?.id ? "Edit" : "Add"}
          </button>
          <button
            className="close-btn"
            onClick={this.props.onCloseProductModalClick}
          >
            Close
          </button>
        </form>
      </div>
    );
  }
}
