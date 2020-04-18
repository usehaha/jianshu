import React, { Component } from 'react'
import Topic from './component/Topic'
import Writer from './component/Writer'
import List from './component/List'
import Recomment from './component/Recomment'

import { HomeWrapper, HomeLeft, HomeRight } from './style'
export default class Home extends Component {
  render () {
    return (
      <HomeWrapper>
        <HomeLeft>
          <p className="banner"></p>
          <Topic />
          <List />
          <Recomment />
          <Writer />
        </HomeLeft>
        <HomeRight></HomeRight>
      </HomeWrapper>
    )
  }
}
