import React, { Component } from 'react'
import styled, { injectGlobal } from 'styled-components'

import CurrentPrice from './components/CurrentPrice'
import PastPrice from './components/PastPrice'
import dateUtils from './utils/dateUtils'

injectGlobal`
  @font-face {
    font-family: 'Fira Code';
    src: url('./fonts/FiraCode-Regular.ttf') format('truetype');
  }

  body {
    background-color: #242526;
    color: white;
    font-family: Fira Code;
  }
`

const Wrapper = styled.section`
  font-size: 50px;
  display: grid;
  text-align: center;
  grid-auto-rows: minmax(300px, auto);
  padding: 150px 20px 100px 20px;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`


class App extends Component {

  render() {

    return (
      <Wrapper>
        <CurrentPrice />
        <PastPrice period={dateUtils.getLastMonthDate()} description='Last Month'/>
        <PastPrice period={dateUtils.getLastYearDate()} description='Last Year'/>
      </Wrapper>
    );
  }
}

export default App
