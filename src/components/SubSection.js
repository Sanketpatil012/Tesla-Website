import React from 'react'
import styled from 'styled-components';



function SubSection({title, description ,leftBtnText,rightBtnText,   backgroundImg }) {
  
    return (
     <Wrap bgImage={backgroundImg}>
      
      <ItemText>
         <h1>{title}</h1>
         <p>{description}</p>
      </ItemText>
     
     
     <ButtonGroup>
    <Button>
     <LeftButton>
         {leftBtnText}
     </LeftButton>
     {rightBtnText &&  <RightButton>
       {rightBtnText}
      </RightButton>}
    </Button>
    <Container>
    <DownArrow src="/images/down-arrow.svg" />
    </Container>
  </ButtonGroup>

    </Wrap>
  )
}

export default SubSection


const Wrap = styled.div`
  height:100vh;
  width:100vw;
   background-image: ${props => `url("images/${props.bgImage}")`};
  background-size: cover; 
  background-position:center;
  background-repeat:no-repeat;
  display:flex;
  flex-direction:column ;
  justify-content:space-between; //vertical 
  align-items:center; //Horizontal;

`

const ItemText= styled.div`
   text-align:center; 
   padding-top:15vh;  

`
 const Button=styled.div`
    display:flex;
    margin-bottom:30px;
    @media(max-width:768px)
    {
        flex-direction:column;
      
    }

 `
const LeftButton=styled.div`
    background-color:rgba(23,26,32,0.8);
    height:40px; 
    width:256px;
    color:white; 
    display:flex;
    justify-content: center ; 
    align-items:center; 
    border-radius: 100px;
    opacity:0.85;
    text-transform:uppercase;
     font-size:12px;
     cursor:pointer;
     margin:8px;
`
const RightButton=styled(LeftButton)`
   background:white; 
   opacity:0.65;
   color:black;
`
const DownArrow = styled.img`

  height:40px;
  
  animation:animationDown infinite 1.5s; 
  overflow-x:hidden;
`
const ButtonGroup=styled.div`


`

const Container= styled.div`
  display:flex;
  align-items:center; 
  justify-content:center; 
`

