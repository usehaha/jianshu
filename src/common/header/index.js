import React, { Component } from 'react';
import { CSSTransition } from "react-transition-group"
import { connect } from 'react-redux'
import { SearchInfoList, SearchInfoItem, SearchInfoSwitch, SearchTitle, SearchInfo, HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from "./style"
import { actionCreators } from './store'
class Header extends Component {
  getListArea () {
    console.log("this.props.list", this.props.list)
    if (this.props.focused) {
      return (
        <SearchInfo>
          <SearchTitle>
            热门搜索
            <SearchInfoSwitch>
              换一批
              </SearchInfoSwitch>
          </SearchTitle>
          <SearchInfoList>
            {/* {

              this.props.list.map((item) => {

                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
              })
            } */}
            <SearchInfoItem >哈哈哈</SearchInfoItem>

          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }
  render () {
    const { focused, handleInputFoucus, handleInputBlur } = this.props
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={focused ? "focused" : ""}
                onFocus={handleInputFoucus}
                onBlur={handleInputBlur}
              >
              </NavSearch>
            </CSSTransition>
            <i className={focused ? "focused iconfont" : "iconfont"}>&nbsp;&nbsp;&#xe662;</i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting">
            <i className="iconfont">&#xe615;</i>写文章</Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state.header)
  return {
    focused: state.header.focused,
    list: state.header.list

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFoucus () {
      dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur () {

      dispatch(actionCreators.searchBlur());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
