import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ProductBtn.css";

export class ProductBtn extends Component {
  static propTypes = {
    onAddClicked: PropTypes.func,
  };

  render() {
    return (
      <div className="add-wrap">
        <button className="add-product" onClick={this.props.onAddClicked}>
          Add Product
        </button>
      </div>
    );
  }
}
