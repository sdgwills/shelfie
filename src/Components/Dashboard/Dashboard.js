import React, { Component } from 'react';
import Product from '../Product/Product';
import './Dashboard.css'
import axios from 'axios';

 class Dashboard extends Component {

  constructor(props) {
    super(props)

    this.state = {
      inventory: []
    }
  }

  componentDidMount() {
    axios.get('/api/inventory').then(products => {
      this.setState({
        inventory: products.data
      })  
    }).catch(err => console.log('waaaaah', err))
  }

  render() {
    return (
      <div className='Dashboard'>
        <div className='mainDashboard'>
        {this.state.inventory.map(products => {
          return <Product 
            key={products.product_id}
            products={products}
          />
        })}
        </div>
      </div>
    )
  }
}

export default Dashboard