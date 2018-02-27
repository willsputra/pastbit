import React, { Component } from 'react'
import styled from 'styled-components'
import RequestPrice from '../api'

const SmallP = styled.p`
    font-size:20px;
`

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
        <SmallP>{this.props.description}</SmallP>
        <p>{this.state.price}</p>
      </div>
    )
  }
}

export default PastPrice
