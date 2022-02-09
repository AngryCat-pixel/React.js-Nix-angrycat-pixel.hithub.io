import React, { Component } from "react";
import { Product } from "../Product/Product";

export class ProductList extends Component {
  render() {
    return (
      <div>
        <table>
          <tbody>
            {this.props.products.length > 0 ? (
              this.props.products.map((product) => {
                return (
                  <Product
                    key={product.id}
                    product={product}
                    onDelete={() => this.props.onDeleteProduct(product.id)}
                    onEdit={() => this.props.onEditProduct(product.id)}
                  />
                );
              })
            ) : (
              <div>Пусто</div>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
