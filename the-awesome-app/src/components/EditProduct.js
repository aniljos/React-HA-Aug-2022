import { Component } from "react";

class EditProduct extends Component {
  state = {
    product: null,
  };

  constructor(props) {

        super(props);
        console.log("[EditProduct constructor]");
        this.state.product = this.props.currentProduct;
  }

  changeName = (evt) => {

    const value = evt.target.value;

    const product = {...this.state.product};
    product.name = value;
    this.setState({
      product
    });

  }
  changePrice = (evt) => {

    const value = evt.target.value;

    const product = {...this.state.product};
    product.price = Number(value);
    this.setState({
      product
    });

  }
  changeDesc = (evt) => {

    const value = evt.target.value;

    const product = {...this.state.product};
    product.description = value;
    this.setState({
      product
    });

  }

  save = () => {

    this.props.onSave(this.state.product);
  }

  cancel = () => {
    
    this.props.onCancel();
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
            <input placeholder="Name" value={product.name} onChange={this.changeName} />
          </div>

          <div>
            <label>Price</label>
            <input placeholder="Price" value={product.price} onChange={this.changePrice}/>
          </div>

          <div>
            <label>Description</label>
            <input
              placeholder="Description"
              value={product.description} onChange={this.changeDesc}
            />
          </div>
          <div>
            <button onClick={this.save}>Save</button> &nbsp;
            <button onClick={this.cancel}>Cancel</button>
          </div>
        </div>
      </fieldset>
    );
  }

  // static getDerivedStateFromProps(nextProps, currentState){

    
  //   //return the updated State based on the props
  //   if(nextProps.currentProduct.id !== currentState.product.id){
  //     return {
  //       //...currentState,
  //       product: nextProps.currentProduct
  //     }
  //   }

  //   //if the props has not changed(there state change)==> return null
  //   return null;

  // }
}

export default EditProduct;
