import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      image_url: '',
      product_name: '',
      product_price: ''
    }
  }
  
  handleChange = e => {
    let { value, name } = e.target
    this.setState({
      [name]: value
    })
  }

  handleClick = e => {
    this.setState({
      image_url: '',
      product_name: '',
      product_price: ''
    })
  }

  render() {
    return (
      <div className='mainForm'>
        <div className='Form'>
          <div className='defaultImage'></div>
          <div>
            <div> Image URL:</div>
            <input 
              className='inputFields'
              name='image_url'
              value={this.state.image_url}
              onChange={this.handleChange} />
            <div> Product Name: </div>
            <input 
              className='inputFields'
              name='product_name'
              value={this.state.product_name}
              onChange={this.handleChange} />
            <div> Price: </div>
            <input 
              placeholder='0'
              className='inputFields'
              name='product_price'
              value={this.state.product_price}
              onChange={this.handleChange} />
            </div>
            <div className='buttonBar'>
              <button onClick={this.handleClick}> Cancel </button>
              <button onClick={this.handleClick}> Add To Inventory </button>
            </div>
        </div>
      </div>
    )
  }
}

export default Form