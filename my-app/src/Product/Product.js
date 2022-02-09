import React, { Component } from "react";
import "./Product.css";

export class Product extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.product?.name || " - "}</td>
        <td>{this.props.product?.category || " - "}</td>
        <td>
          <button className="del-product" onClick={this.props.onDelete}>
            Delete
          </button>
        </td>
        <td>
          <button className="edit-product" onClick={this.props.onEdit}>
            Edit
          </button>
        </td>
      </tr>
    );
  }
}
