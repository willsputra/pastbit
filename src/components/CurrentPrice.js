import React, { Component } from 'react'
import RequestPrice from '../api'
import styled from 'styled-components'

const SingleColumnGrid = styled.div`
    @media only screen and (min-width: 768px) {
        grid-column-start: 1;
        grid-column-end: 3;
    }
`

const SmallP = styled.p`
    font-size:20px;
`

class CurrentPrice extends Component {
    constructor() {
      super()
      this.state = {
        price: ''
      }
    }
  
    componentWillMount() {
    
      RequestPrice.fetchCurrentPrice()
        .then(data => {
          this.setState({ price: data.bpi.USD.rate_float.toFixed(2) })
        })
    }
  
    render() {
      return (
        <SingleColumnGrid>
            <SmallP>Today</SmallP>
            <p>{this.state.price}</p>
        </SingleColumnGrid>
      )
    }
  }
    
export default CurrentPrice
    