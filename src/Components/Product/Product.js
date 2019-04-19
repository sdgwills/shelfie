import React, { Component } from 'react';
import axios from 'axios';

class Product extends Component {

  constructor(props) {
    super(props)

    this.state = {
      
    }
  }



  render() {
    let { inventory } = this.props
    return (
      <div>
        <p> 
          {inventory.image_url}{inventory.product_name}{inventory.product_price}{inventory} <button> Edit </button>  <button> Delete </button> 
        </p>
      </div>
    )
  }
}

export default Product