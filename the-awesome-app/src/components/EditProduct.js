import { Component } from "react";

class EditProduct extends Component {
  state = {
    product: null,
  };

  constructor(props) {
        super(props);

        this.state.product = this.props.currentProduct;
  }

  render() {
    const { currentProduct } = this.props;
    const {product} = this.state;
    return (
      <fieldset>
        <div>
          <h3>Edit Product : ID- {currentProduct.id}</h3>

          <div>
            <label>Name</label>
            <input placeholder="Name" value={product.name} />
          </div>

          <div>
            <label>Price</label>
            <input placeholder="Price" value={product.price} />
          </div>

          <div>
            <label>Description</label>
            <input
              placeholder="Description"
              value={product.description}
            />
          </div>
          <div>
            <button>Save</button> &nbsp;
            <button>Cancel</button>
          </div>
        </div>
      </fieldset>
    );
  }
}

export default EditProduct;
