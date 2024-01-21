import React from 'react'
import styled from 'styled-components'
import SubSection from './SubSection'

function Section() {
  return (
      <Container>
      <SubSection title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <SubSection  title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"/>
      <SubSection
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      
      />
     
     <SubSection
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      
      />
        <SubSection
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        backgroundImg="solar-panel.jpg"
        leftBtnText=" order now"
        rightBtnText="Learn more"
      
      />
      
      <SubSection
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof Solar Panels  "
        backgroundImg="solar-roof.jpg"
        leftBtnText=" order now"
        rightBtnText="Learn more"
      
      />
           <SubSection
        title="Accessories"
        description=" "
        backgroundImg="accessories.jpg"
        leftBtnText="Shop Now "
     />
    </Container>
  )
}

export default Section

const Container = styled.div`

`



