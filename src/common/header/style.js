import styled from "styled-components"
import jianshu from './../../img/jianshu.png'
export const HeaderWrapper = styled.div`
position:relative;
height :56px;
border-bottom:1px solid #f0f0f0;

`
export const Logo = styled.a.attrs({
  href: '/'
})`
position:absolute;
top:0;
left:0;
display:block;
width:100px;
height:56px;
background:url(${jianshu});
background-size:contain;
`;
export const Nav = styled.nav`
width:960px;
height:100%;
padding-right:140px;
box-sizing:border-box;
margin:0px auto;
// background:green;

`;
export const NavItem = styled.div`
line-height:56px;
padding:0 15px;
font-size:17px;
color:#333;
&.left{
  float:left;
}
&.right{
  float:right;
  color:#969696;
}
&.active{
  color:#ea6f5a;
}
`;
export const SearchWrapper = styled.div`
position:relative;
float:left;

.iconfont{
  position:absolute;
  right:5px;
  bottom:5px;
  width:30px;
  line-height:30px;
  border-radius:15px;
  text-algin:center;
  &.focused{
    background:#777;
    color:#fff;
  }
}
`
export const NavSearch = styled.input.attrs({
  placeholder: "搜索"
})`
width:160px;
height:38px;
padding:0 30px 0 20px;
box-sizing:border-box;
margin:9px 0 0 20px;
border:none;
outline:none;
border-radius:19px;
background:#eee;
font-size:14px;
color:#666;
&::placehoader{
  color:#999;
}
&.focused{
  width:240px;

}
&.slide-enter{
  transition:all .3s ease-out;
}
&.slide-enter-active{
  width:240px;
}
&.slide-exit{
  transition:all .3s ease-out;
}
&.slide-exit-active{
  width:160px;
}
`;
export const SearchInfo = styled.div`
position:absolute;
left:0;
top:56px;
width:240px;
padding:0 20px;
box-shadow:0 0 8px rgba(0,0,0,.2);
`;
export const SearchTitle = styled.div`
margin:20px 0 15px 0;
line-height:20px;
font-size:14px;
color:#969696;
`;
export const SearchInfoSwitch = styled.span`
float:right;
font-size:13px;
`;
export const SearchInfoList = styled.div`
overflow:hidden;
`
export const SearchInfoItem = styled.a`
float:left;
display:block;
font-size:12px;
padding:0 5px;
margin:0 10px 10px 0;
line-height:20px;
border:1px solid #ddd;
color:#787878;
border-radius:3px;

`
export const Addition = styled.div`
position:absolute;
right:0;
top:0;
height:56px;

`;
export const Button = styled.div`
float:right;
margin:9px 20px 0 0;
padding:0 20px;
line-height:38px;
border-radius:19px;
border:1px solid #ec6149;
font-size:14px;
&.reg{
  color:#ec6149;
}
&.writting{
  color:#fff;
  background:#ec6149;
}
`