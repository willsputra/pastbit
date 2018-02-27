import React, { Component } from 'react'
import RequestPrice from '../api'

class PastPrice extends Component {
  constructor() {
    super()
    this.state = {
      price: ''
    }
  }

  componentWillMount() {

    let period = this.props.period

    RequestPrice.fetchPastPrice(period)
      .then(data => {
        this.setState({ price: data.bpi[period].toFixed(2) })
      })
  }

  render() {
    return (
      <div>
        <p>{this.props.description}</p>
        <p>{this.state.price}</p>
      </div>
    )
  }
}

export default PastPrice
