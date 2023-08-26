import { useState } from "react"

export const MyCondition:React.FC<{}>=()=>{
    let [isRachanaWorking,setisRachanaWorking]=useState(true)
    return <>
    <h1>hello im condition topic</h1>
{isRachanaWorking==true?<>i will gift one phon to u </>:<>what gift</>}
    </>
}