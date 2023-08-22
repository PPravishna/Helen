import styled from "styled-components"
import { MYbutton } from "./MYbutton"

export const Styled_ComponentCss:React.FC<{}>=()=>{
    return <>
    <MYbutton/>
    <MYbutton/>
    <MYbutton/>
    <MYbutton/>
    <MYbutton/>
<Myh1/>
<MyButton1 color="blue">hello im button</MyButton1>
    </>
}

let MyButton1=styled.button<{color:any}>`
background-color: ${(prop:any)=>{return prop.color}};`
let Myh1=styled.h1`
color:green
`