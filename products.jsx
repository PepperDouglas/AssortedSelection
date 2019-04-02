import React, { Component } from 'react';
import { withCookies } from 'react-cookie';
import { Route, Link } from "react-router-dom";
import Item from "./item";


class Products extends Component{
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  getProducts = async () =>{
    let products = await fetch('/products')
        .then(response => response.json());
        this.setState(this.state.products = products) 
  }

  componentDidMount() {
    this.getProducts();
    if(!this.props.cookies.get('X-salt-session')) {
      fetch('/carts', { method: 'POST' })
    }
  }

  render(){
    return(
      <React.Fragment>
        <h1>Products</h1>
        <ul>
          {this.state.products.map((product) => 
            <li key={product.id}>
              <Link to={this.props.match.url + '/' + product.id}>{product.item}</Link>
            </li>
          )}
        </ul>
        <div className="item">
          <Route path={this.props.match.path + '/*'} component={() => <Item pathname={this.props.location.pathname} />} />
        </div>
      </React.Fragment>

    )
  }
}

export default withCookies(Products);