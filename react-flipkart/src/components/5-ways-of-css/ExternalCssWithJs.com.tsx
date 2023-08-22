import { mycss } from "./externalcss"

export const ExternalCssWithJs:React.FC<{}>=()=>{
  
    return <>
    <h1>im a css with js that is extewrnal</h1>
    <div style={mycss}/>
    </>
}