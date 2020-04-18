import styled from 'styled-components'
import banner from './../../img/timg.jpg'
export const HomeWrapper = styled.div`
overflow:hidden;
width:960px;
margin:0px auto;

`;
export const HomeLeft = styled.div`
margin-left:15px;
padding-top:30px;
width:625px;
float:left;
.banner{
background:url(${banner});
width:625px;
height:270px;
}

`;
export const HomeRight = styled.div`
width:240px;
float:right;
`;