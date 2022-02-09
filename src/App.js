import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { ProductList } from "./ProductList/ProductList";
import { ProductBtn } from "./ProductBtn/ProductBtn";
import { ProductModal } from "./ProductModal/ProductModal";

class App extends Component {
  constructor(props) {
    super(props);
    this.onAddItem = ({ name, category }) => {
      this.setState({
        isAddModalVisible: false,
        products: [
          ...this.state.products,
          {
            id: uuidv4(),
            name,
            category,
          },
        ],
      });
    };
    this.onApplyEditProduct = (product) => {
      this.setState({
        isAddModalVisible: false,
        editingProduct: null,
        products: this.state.products.map((stateProduct) => {
          if (stateProduct.id === product.id) {
            return product;
          }
          return stateProduct;
        }),
      });
    };

    this.onEditProduct = (id) => {
      const product = this.state.products.find((product) => product.id === id);
      this.setState({
        isAddModalVisible: true,
        editingProduct: product,
      });
    };

    this.onDeleteProduct = (id) => {
      this.setState({
        products: this.state.products.filter((product) => product.id != id),
      });
    };

    this.onModalClose = () => {
      this.setState({
        isAddModalVisible: false,
        editingProduct: null,
      });
    };

    this.state = {
      products: [
        {
          id: uuidv4(),
          name: "Абрикос",
          category: "Fruit",
        },
        {
          id: uuidv4(),
          name: "Гуава",
          category: "Fruit",
        },
        {
          id: uuidv4(),
          name: "Инжир",
          category: "Fruit",
        },
        {
          id: uuidv4(),
          name: "Редис",
          category: "Vegetables",
        },
        {
          id: uuidv4(),
          name: "Морковь",
          category: "Vegetables",
        },
        {
          id: uuidv4(),
          name: "Хрен ",
          category: "Vegetables",
        },
        {
          id: uuidv4(),
          name: "Чечил",
          category: "Cheese",
        },
        {
          id: uuidv4(),
          name: "Сулугуни",
          category: "Cheese",
        },
        {
          id: uuidv4(),
          name: "Рикотта",
          category: "Cheese",
        },
        {
          id: uuidv4(),
          name: "Ahmad ",
          category: "Tea",
        },
        {
          id: uuidv4(),
          name: "Bernley",
          category: "Tea",
        },
        {
          id: uuidv4(),
          name: "Curtis ",
          category: "Tea",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <ProductList
          products={this.state.products}
          onDeleteProduct={this.onDeleteProduct}
          onEditProduct={this.onEditProduct}
        />
        <ProductBtn
          onAddClicked={() => {
            this.setState({ isAddModalVisible: true });
          }}
        />
        {this.state.isAddModalVisible ? (
          <ProductModal
            onAddItemClick={this.onAddItem}
            onCloseProductModalClick={this.onModalClose}
            onEditItemClick={this.onApplyEditProduct}
            product={this.state.editingProduct}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
