import React, { Component } from 'react';
import { withCookies } from 'react-cookie';

class Item extends Component{
  constructor(props) {
    super(props)
    this.state = {
      product: '',
      pathname: this.props.pathname
    }
  }

  componentDidMount() {
    this.getItem(this.state.pathname)
    console.log(this.props)
  }
  
  getItem = async (pathname) =>{
    let item = await fetch(`${pathname}`)
    .then(response => response.json());
    this.setState(this.state.product = item)
    console.log(this.state.product);
    }
  
  render(){
    return(
      <React.Fragment>
        <h1>{this.state.product.item}</h1>
        <ul>
          <li>{this.state.product.description}</li>
          <li>{this.state.product.price}</li>
        </ul>
      </React.Fragment>

    )
  }
}

export default withCookies(Item);