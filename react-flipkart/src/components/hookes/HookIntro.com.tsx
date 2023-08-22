import { Button } from "@mui/material"
import { useEffect, useState } from "react"

export const HookIntro:React.FC<{}>=()=>{
    let [val,setVal]=useState<String |number>(0)
   
    useEffect(()=>{
        setVal(10)
    },[])
   let handleClick=()=>{
alert("hahaah")
   }
    return <>
    <input type="text" onChange={(e)=>{console.log(e.target.value);setVal(e.target.value)}}/><br />
    <Button onClick={handleClick}>click me</Button>
    {val}
    </>
}

// let ashwini=()=>{
//     let data=0
//     let dataSetter:any=(val:any)=>{
// data=val
// return data
//     }
//     return [data,dataSetter]
// }