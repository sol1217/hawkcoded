import React from 'react'
import { FooterStyled, PStyled } from './Footer.Elements';

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear()


  return (
    <>  
        <FooterStyled>
            <div>
                <PStyled>©HawkCoded {year}.</PStyled>
            </div>
            <div>
                <PStyled>All Rights Reserved.</PStyled>
            </div>
        </FooterStyled>
    </>
  )
}
